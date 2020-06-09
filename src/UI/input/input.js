import React, {useState} from "react";

const Input = ({inputId, label, placeholder, warningMessage, setValidForm, disabled}) => {
  const [isValid, setValid] = useState(true);
  const [value, setValue] = useState('');

  const onInput = event => {
    setValue(event.target.value);
    checkValid(event.target.value);
  };

  const checkValid = (value) => {
    const string = value.split(' ').join('');
    if (string === '') {
      setValid(false);
      setValidForm(false)
    }
    else {
      setValid(true);
      setValidForm(true)
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
        disabled={disabled}
      />
      <div className="invalid-feedback">
        {warningMessage}
      </div>
    </div>
  );
};

export default Input;
