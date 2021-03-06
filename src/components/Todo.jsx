import React, { useState } from "react";

import UpdateTodo from "./UpdateTodo";
import DeleteTodo from "./DeleteTodo";
import UpdateCancelButton from "./UpdateCancelButton";

const Todo = ({ v, i, onClickUpdate, onClickDelete }) => {
  const [updateToggle, setUpdateToggle] = useState(false);

  const onClickUpdateToggle = () => {
    setUpdateToggle(!updateToggle);
  };

  return (
    <>
      {updateToggle ? (
        <>
          <UpdateTodo
            v={v}
            i={i}
            onClickUpdate={onClickUpdate}
            onClickUpdateToggle={onClickUpdateToggle}
          />
          <UpdateCancelButton
            onClickUpdateToggle={onClickUpdateToggle}
            buttonName="Cancel"
          />
        </>
      ) : (
        <>
          <div className="mx-4">{v}</div>
          <div>
            <UpdateCancelButton
              onClickUpdateToggle={onClickUpdateToggle}
              buttonName="Update"
            />
            <DeleteTodo deleteIndex={i} onClickDelete={onClickDelete} />
          </div>
        </>
      )}
    </>
  );
};

export default Todo;
