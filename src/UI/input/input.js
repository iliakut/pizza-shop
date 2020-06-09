import React from "react";

const Input = ({inputId, label, placeholder, warningMessage}) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input type="text" className="form-control" id={inputId} aria-describedby="emailHelp"
             placeholder={placeholder}/>
      <div className="invalid-feedback">
        {warningMessage}
      </div>
    </div>
  );
};

export default Input;
