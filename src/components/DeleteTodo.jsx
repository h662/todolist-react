import React from "react";

const DeleteTodo = ({ deleteIndex, onClickDelete }) => {
  return (
    <button
      className="bg-red-300 p-2 focus:outline-none mx-1"
      onClick={onClickDelete(deleteIndex)}
    >
      Delete
    </button>
  );
};

export default DeleteTodo;
