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
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="bg-green-300 p-8">
        <div className="text-4xl text-center py-4 text-green-700">
          To do list
        </div>
        <CreateTodo createTodo={createTodo} />
        <Todolist
          todolist={todolist}
          onClickUpdate={onClickUpdate}
          onClickDelete={onClickDelete}
        />
      </div>
    </div>
  );
};

export default App;
