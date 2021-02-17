import React from "react";

const UpdateCancelButton = ({ onClickUpdateToggle, buttonName }) => {
  return <button onClick={onClickUpdateToggle}>{buttonName}</button>;
};

export default UpdateCancelButton;
