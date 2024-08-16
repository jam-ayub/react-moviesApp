import React from "react";

const Input = ({ name, lable, value, onChange }) => {
  return (
    <div className="form-group">
      <lable htmlFor={name}>{lable}</lable>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;

