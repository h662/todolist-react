import React from "react";

const DeleteTodo = ({ deleteIndex, onClickDelete }) => {
  return <button onClick={onClickDelete(deleteIndex)}>Delete</button>;
};

export default DeleteTodo;
