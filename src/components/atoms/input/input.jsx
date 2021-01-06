import "./input.scss";

import React from "react";

const Input = ({
  name,
  placeholder,
  type,
  autocomplete,
  register
}) => {
  return (
    <input
      className="a-input"
      name={name}
      placeholder={placeholder}
      ref={register}
      type={type}
      autoComplete={autocomplete}
    />
  );
};

export default Input;
