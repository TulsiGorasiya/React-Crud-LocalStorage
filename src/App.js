import React, { useEffect, useState } from "react";
import Data from "./componets/Data";
const getLocalData = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalData());
  const [isEditing, setEditing] = useState(false);
  const [editId, setEditid] = useState(null);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditid(null);
      setEditing(false);
    } else {
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
        <h1 className=" flex  justify-center m-4 font-bold text-4xl">
          React From
        </h1>
        <div className="flex justify-center my-5 ">
          <input
            type="text"
            className="border border-solid border-gray px-4"
            placeholder="enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div className="border border-solid bg-gray-200 rounded-lg mx-10">
            <button type="submit" className="px-3 my-1">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </div>
      </form>
      {list.length > 0 && (
        <div>
          <Data items={list} removeItem={removeItem} editItem={editItem} />
        </div>
      )}
    </div>
  );
};

export default App;
