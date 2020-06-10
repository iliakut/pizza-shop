import React, {useEffect, useState} from "react";
import Input from "../../UI/input/input";
import getPriceString from "../../helpers/functions/getPriceString";
import {Link} from "react-router-dom";
import NoItemsBanner from "../noItemsBanner/noItemsBanner";

const ConfirmPage = (
  {
    price,
    cartItems,
    clearCart,
    saveOrderToHistory
  }) => {

  const [validForm, setValidForm] = useState({
    name: false,
    surname: false,
    address: false,
    phone: false,
  });
  const [isAllValid, setAllValid] = useState(true);
  const [isConfirmed, setConfirmed] = useState(false);
  const orderNumber = (Math.random() * 1000).toFixed();
  const totalPrice = price + 10;
  const deliveryCost = getPriceString(10);
  const totalPriceString = getPriceString(totalPrice);
  let btnClasses = 'btn btn-info';
  const isEmptyOrder = !isConfirmed && (Object.keys(cartItems).length <= 1);

  if (!isAllValid || isConfirmed) {
    btnClasses += ' disabled';
  }

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
    if (isAllValid && !isConfirmed) {
      setConfirmed(true);
      const timeStamp = Date.now();
      saveOrderToHistory(timeStamp, cartItems);
      clearCart();
    }
  };

  const DeliveryInformation = (
    <React.Fragment>
      <p className="mb-0">Delivery {deliveryCost} (already included)</p>
      <p className="mb-0">(Delivery is free if your total price is more than 250€ / 282.5$)</p>
    </React.Fragment>
  );

  const OrderInformationBanner = (
    <div className="alert alert-warning">
      <p className="mb-0">Total price: {totalPriceString}</p>
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
      <p className="mb-0">Order number: {orderNumber}</p>
    </div>
  );

  const FormContent = (
    <React.Fragment>
      <Input
        inputId="nameInput"
        label="Name*"
        placeholder="Enter your name"
        warningMessage="Please enter your name"
        setValidForm={(isValid) => validateForm('name', isValid)}
        disabled={isConfirmed}
      />
      <Input
        inputId="surnameInput"
        label="Surname*"
        placeholder="Enter your surname"
        warningMessage="Please enter your surname"
        setValidForm={(isValid) => validateForm('surname', isValid)}
        disabled={isConfirmed}
      />
      <Input
        inputId="addressInput"
        label="Address*"
        placeholder="Enter your address"
        warningMessage="Please enter your address"
        setValidForm={(isValid) => validateForm('address', isValid)}
        disabled={isConfirmed}
      />
      <Input
        inputId="phoneInput"
        label="Phone Number*"
        placeholder="Enter your phone number"
        warningMessage="Please enter phone number"
        setValidForm={(isValid) => validateForm('phone', isValid)}
        disabled={isConfirmed}
      />
      <div className="form-group">
        <label htmlFor="commentsArea">Comments</label>
        <textarea
          className="form-control"
          id="commentsArea"
          rows="3"
          disabled={isConfirmed}>
        </textarea>
      </div>
      {
        isConfirmed
          ? OrderConfirmedBanner
          : OrderInformationBanner
      }
      <button
        type="submit"
        className={btnClasses}
        onClick={(event) => onClick(event)}
      >CONFIRM
      </button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <form className="mr-4">
        <fieldset>
          <legend>
            <h1>
              Confirmation
            </h1>
            <Link to="/order">to order page</Link>
            {
              isEmptyOrder
                ? <NoItemsBanner/>
                : null
            }
          </legend>
          {
            isEmptyOrder
            ? null
            : FormContent
          }
        </fieldset>
      </form>
    </React.Fragment>
  );
};

export default ConfirmPage;
