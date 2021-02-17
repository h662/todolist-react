import React, { useState } from "react";

const CreateTodo = ({ createTodo }) => {
  const [todo, setTodo] = useState("");

  const onChangeCreate = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitCreate = (e) => {
    e.preventDefault();
    createTodo(todo);
    setTodo("");
  };

  return (
    <>
      <form onSubmit={onSubmitCreate}>
        <input type="text" value={todo} onChange={onChangeCreate} />
        <input type="submit" value="Create" />
      </form>
    </>
  );
};

export default CreateTodo;
