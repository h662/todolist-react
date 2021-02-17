import React, { useState } from "react";

import CreateTodo from "./components/CreateTodo";
import Todolist from "./components/Todolist";

const App = () => {
  const [todolist, setTodolist] = useState([]);

  const createTodo = (v) => {
    setTodolist([...todolist, v]);
  };

  const onClickUpdate = (updateValue, updateIndex) => {
    setTodolist(todolist.map((v, i) => (i === updateIndex ? updateValue : v)));
  };

  const onClickDelete = (deleteIndex) => () => {
    setTodolist(todolist.filter((v, i) => i !== deleteIndex));
  };

  return (
    <>
      <CreateTodo createTodolist={createTodo} />
      <Todolist
        todolist={todolist}
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
      />
    </>
  );
};

export default App;
