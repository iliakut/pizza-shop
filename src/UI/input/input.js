import React, {useState} from "react";

const Input = ({inputId, label, placeholder, warningMessage}) => {
  const [isValid, setValid] = useState(true);
  const [value, setValue] = useState('');

  const onInput = event => {
    setValue(event.target.value);
    checkValid(event.target.value);
  };

  const checkValid = (value) => {
    if (value === '') {
      setValid(false);
    }
    else {
      setValid(true);
    }
  };

  let inputClasses = 'form-control';
  if (!isValid) {
    inputClasses += ' is-invalid'
  }

  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        className={inputClasses}
        id={inputId}
        aria-describedby="emailHelp"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onInput(event)}
        onBlur={() => checkValid(value)}
      />
      <div className="invalid-feedback">
        {warningMessage}
      </div>
    </div>
  );
};

export default Input;
