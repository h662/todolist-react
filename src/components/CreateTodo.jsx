import React, { useState } from "react";

const CreateTodo = ({ createTodo }) => {
  const [todo, setTodo] = useState("");

  const onChangeCreate = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitCreate = (e) => {
    e.preventDefault();
    if (todo) {
      createTodo(todo);
      setTodo("");
    }
  };

  return (
    <div className="py-2">
      <form onSubmit={onSubmitCreate}>
        <input
          className="mx-2 bg-green-100 p-2 focus:outline-none focus:ring-2 focus:ring-green-600 "
          type="text"
          value={todo}
          onChange={onChangeCreate}
          placeholder="Write here"
        />
        <input
          className="bg-yellow-100 p-2 focus:outline-none"
          type="submit"
          value="Create"
        />
      </form>
    </div>
  );
};

export default CreateTodo;
