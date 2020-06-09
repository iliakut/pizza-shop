import React, {useEffect, useState} from "react";
import Input from "../../UI/input/input";

const ConfirmPage = () => {

  const [validForm, setValidForm] = useState({
    name: false,
    surname: false,
    address: false,
  });

  useEffect(() => {
    console.log(validForm)
  }, [validForm]);

  const validateForm = (field, isValid) => {
    setValidForm(oldVal => {
      const newVal = {...oldVal};
      newVal[field] = isValid;

      return newVal;
    })
  };

  const onClick = (event) => {
    event.preventDefault();
  };

  return (
    <form className="mr-4">
      <fieldset>
        <legend>
          <h1>
            Confirmation
          </h1>
        </legend>
        <Input
          inputId="nameInput"
          label="Name"
          placeholder="Enter your name"
          warningMessage="Please enter your name"
          setValidForm={(isValid) => validateForm('name', isValid)}
        />
        <Input
          inputId="surnameInput"
          label="Surname"
          placeholder="Enter your surname"
          warningMessage="Please enter your surname"
          setValidForm={(isValid) => validateForm('surname', isValid)}
        />
        <Input
          inputId="addressInput"
          label="Address"
          placeholder="Enter your address"
          warningMessage="Please enter your Address"
          setValidForm={(isValid) => validateForm('address', isValid)}
        />
        <div className="form-group">
          <label htmlFor="commentsArea">Comments</label>
          <textarea className="form-control" id="commentsArea" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={(event) => onClick(event)}>Submit</button>
      </fieldset>
    </form>
  );
};

export default ConfirmPage;
