import React, {useEffect, useState} from "react";
import Input from "../../UI/input/input";
import getPriceString from "../../helpers/functions/getPriceString";

const ConfirmPage = ({price, pricesString}) => {

  const [validForm, setValidForm] = useState({
    name: false,
    surname: false,
    address: false,
  });
  const [isAllValid, setAllValid] = useState(true);
  const [isConfirmed, setConfirmed] = useState(false);
  let btnClasses = 'btn btn-info';
  if (!isAllValid) {
    btnClasses += ' disabled';
  }
  const deliveryCost = getPriceString(10);

  useEffect(() => {
    const values = Object.values(validForm);
    const valid = values.every(value => {
      return value;
    });

    if (!valid) {
      setAllValid(false);
    } else {
      setAllValid(true);
    }
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
    if (isAllValid) {
      setConfirmed(true);
    }
  };

  const DeliveryInformation = (
    <React.Fragment>
      <p className="mb-0">Delivery {deliveryCost}</p>
      <p className="mb-0">(Delivery is free if your total price is more than 250€ / 282.5$)</p>
    </React.Fragment>
  );

  const OrderInformationBanner = (
    <div className="alert alert-warning">
      <p className="mb-0">Total price: {pricesString}</p>
      {
        price >= 250
          ? null
          : DeliveryInformation
      }
    </div>
  );

  const OrderConfirmedBanner = (
    <div className="alert alert-success">
      <p className="mb-0">Your order has been confirmed</p>
      <p className="mb-0">Order number: {(Math.random() * 1000).toFixed()}</p>
    </div>
  );

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
        {
          isConfirmed
            ? OrderConfirmedBanner
            : OrderInformationBanner
        }
        <button type="submit" className={btnClasses} onClick={(event) => onClick(event)}>Submit</button>
      </fieldset>
    </form>
  );
};

export default ConfirmPage;
