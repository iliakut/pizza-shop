import React from "react";

const ConfirmPage = () => {
  return (
    <form className="mr-4">
      <fieldset>
        <legend>
          <h1>
            Confirmation
          </h1>
        </legend>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                 placeholder="Enter your name"/>
        </div>
        <div className="form-group">
          <label htmlFor="name">Surname</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                 placeholder="Enter your name"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleTextarea">Comments</label>
          <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  );
};

export default ConfirmPage;
