import React from "react";
import "./orderPage.css"
import OrderItem from "./orderItem/orderItem";
import getPriceString from "../../helpers/functions/getPriceString";

const OrderPage = (
  {
    cartItems,
    flatMenu,
    currencyRate,
    pricesString,
    addToCart,
    removeFromCart,
    deleteFromCart,
  }) => {

  const newCartItems = {...cartItems};
  delete newCartItems.count;
  const itemIds = Object.keys(newCartItems);

  const CartItems = itemIds.map(id => {
    const menuItem = flatMenu.find(item => Number(item.id) === Number(id));
    const {name, img, price} = menuItem;
    const quantity = newCartItems[id];
    const allPrice = (price * quantity);
    const priceString = getPriceString(allPrice, currencyRate);

    const orderProps = {
      id,
      name,
      img,
      quantity,
      priceString,
      addToCart,
      removeFromCart,
      deleteFromCart,
    };

    return (
      <OrderItem
        key={id}
        {...orderProps}
      />
    )
  });

  const itemsLength = CartItems.length;

  return (
    <div className="mr-2 mt-2 order-page">
      <h1>Order</h1>
      {
        itemsLength
          ? CartItems
          : <h3>You have no items in your shopping cart.</h3>
      }
      <h3>{pricesString}</h3>
      {
        itemsLength
          ? <button type="button" className="btn btn-info mb-5">ORDER NOW</button>
          : null
      }
    </div>
  );
};

export default OrderPage;
