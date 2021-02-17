import React from "react";

const UpdateCancelButton = ({ onClickUpdateToggle, buttonName }) => {
  return (
    <button
      className="bg-yellow-100 p-2 focus:outline-none mx-1"
      onClick={onClickUpdateToggle}
    >
      {buttonName}
    </button>
  );
};

export default UpdateCancelButton;
