import React from "react";

const Data = (items, removeItem, editItem) => {
  return (
    <div className="container">
      <>
        {items?.items?.map((item) => {
          const { id, title } = item;
          return (
            <ul className="flex justify-center" key={id}>
              <li className="flex border border-solid border-black p-4">
                ⚫<div className="mx-5">{title}</div>
                <div className="border border-solid bg-gray-200 rounded-lg ms-24">
                  <button
                    type="button"
                    className="px-3 my-1"
                    onClick={() => items.editItem(id)}
                  >
                    Edit
                  </button>
                </div>
                <div className="border border-solid bg-red-300 rounded-lg ms-2">
                  <button
                    type="button"
                    className="px-3 my-1"
                    onClick={() => items.removeItem(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          );
        })}
      </>
      {/* } */}
    </div>
  );
};

export default Data;
