import React from "react";
import Input from "../../UI/input/input";

const ConfirmPage = () => {
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
        />
        <Input
          inputId="surnameInput"
          label="Surname"
          placeholder="Enter your surname"
          warningMessage="Please enter your surname"
        />
        <Input
          inputId="addressInput"
          label="Address"
          placeholder="Enter your address"
          warningMessage="Please enter your Address"
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
