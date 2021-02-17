import React from "react";

import Todo from "./Todo";

const Todolist = ({ todolist, onClickUpdate, onClickDelete }) => {
  return (
    <>
      <ol>
        {todolist &&
          todolist.map((v, i) => {
            return (
              <li key={v + i}>
                <Todo
                  v={v}
                  i={i}
                  onClickUpdate={onClickUpdate}
                  onClickDelete={onClickDelete}
                />
              </li>
            );
          })}
      </ol>
    </>
  );
};

export default Todolist;
