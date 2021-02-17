import React, { useState } from "react";

const UpdateTodo = ({ v, i, onClickUpdate, onClickUpdateToggle }) => {
  const [updateValue, setUpdateValue] = useState(v);

  const onChangeUpdate = (e) => {
    setUpdateValue(e.target.value);
  };

  const onSubmitUpdate = (e) => {
    e.preventDefault();
    onClickUpdate(updateValue, i);
    onClickUpdateToggle();
  };

  return (
    <form onSubmit={onSubmitUpdate}>
      <input type="text" value={updateValue} onChange={onChangeUpdate} />
      <input type="submit" value="Confirm" />
    </form>
  );
};

export default UpdateTodo;
