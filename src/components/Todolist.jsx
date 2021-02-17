import React from "react";

import Todo from "./Todo";

const Todolist = ({ todolist, onClickUpdate, onClickDelete }) => {
  return (
    <>
      <ul className="py-4">
        {todolist &&
          todolist.map((v, i) => {
            return (
              <li key={v + i} className="flex justify-between items-center p-1">
                <Todo
                  v={v}
                  i={i}
                  onClickUpdate={onClickUpdate}
                  onClickDelete={onClickDelete}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Todolist;
