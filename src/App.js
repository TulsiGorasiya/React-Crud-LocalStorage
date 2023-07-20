import React, { useEffect, useState } from 'react'
import Data from './componets/Data'
const getLocalData = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  }
  else {
    return [];
  }
};
const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalData());
  const [isEditing, setEditing] = useState(false);
  const [editId, setEditid] = useState(null);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name }
          }
          return item
        })
      );
      setName("");
      setEditid(null);
      setEditing(false);

    }
    else {
      console.log("submitted form");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const removeItem = (id) => {
    console.log("removing item");
    const filteredList = list.filter((items) => items.id !== id);
    //setList(list.filter((item) => item.id === id));
    console.log("tulsi", filteredList);
    setList(filteredList);

  };
  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    setEditid(id);
    setEditing(true);
    setName(editItem.title);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>React From</h3>
        <div className='mb-3 form'>
          <input type="text" className='class-control' placeholder='enter your name' onChange={(e) => setName(e.target.value)} value={name} />
          <button type="submit" className='btn btn-success'>{
            isEditing ? "Edit" : "Submit"
          }
          </button>

        </div>
      </form>
      {list.length > 0 && (
        <div>
          <Data items={list} removeItem={removeItem} editItem={editItem} />
        </div>
      )}
    </div>
  )
}

export default App

