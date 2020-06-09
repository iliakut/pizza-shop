import React from "react";
import "./orderPage.css"
import OrderItem from "./orderItem/orderItem";

const OrderPage = (
  {
    cartItems,
    flatMenu,
    currencyRate,
    addToCart,
    removeFromCart,
    deleteFromCart
  }) => {
  console.log(cartItems, flatMenu);
  const newCartItems = {...cartItems};
  delete newCartItems.count;
  let mainPrice = 0;

  const itemIds = Object.keys(newCartItems);

  const CartItems = itemIds.map(id => {
    const menuItem = flatMenu.find(item => Number(item.id) === Number(id));
    const {name, img, price} = menuItem;
    const quantity = newCartItems[id];
    const allPrice = (price * quantity).toFixed(2);
    const allPriceDollars = (allPrice * currencyRate).toFixed(2);
    mainPrice += price * quantity;

    const orderProps = {
      id,
      name,
      img,
      quantity,
      allPrice,
      allPriceDollars,
      addToCart,
      removeFromCart,
      deleteFromCart,
    };

    return (
      <OrderItem
        key={id}
        {...orderProps}
      />
      // <div key={id} className="mb-3 mr-5 p-3 order-item">
      //   <div className="mb-3 image-order-wrap">
      //     <span>
      //       <strong>{name}</strong>
      //     </span>
      //   <img
      //     className="image-order border border-secondary rounded"
      //     src={img}
      //     alt={name}
      //   />
      //   </div>
      //   <div className="my-1">
      //     <button type="button" className="btn btn-secondary" onClick={() => removeFromCart(id)}>
      //       <strong>
      //         -
      //       </strong>
      //     </button>
      //     <span className="mx-2">{quantity}</span>
      //     <button type="button" className="btn btn-secondary" onClick={() => addToCart(id)}>
      //       <strong>
      //         +
      //       </strong>
      //     </button>
      //   </div>
      //   <div className="my-1">
      //     <span className="mr-2">{`${allPrice}€ / ${allPriceDollars}$`}</span>
      //     <button type="button" className="btn btn-secondary" onClick={() => deleteFromCart(id)}>
      //       <strong>
      //         x
      //       </strong>
      //     </button>
      //   </div>
      // </div>
    )
  });

  const mainPriceDollars = mainPrice * currencyRate;
  const mainPriceString = mainPrice.toFixed(2);
  const mainPriceDollarsString = mainPriceDollars.toFixed(2);
  const itemsLength = CartItems.length;

  return (
    <div className="mr-2 mt-2 order-page">
      <h1>Order</h1>
      {
        itemsLength
          ? CartItems
          : <h3>You have no items in your shopping cart.</h3>
      }
      <h3>{`${mainPriceString}€ / ${mainPriceDollarsString}$`}</h3>
      {
        itemsLength
          ? <button type="button" className="btn btn-info">ORDER NOW</button>
          : null
      }
    </div>
  );
};

export default OrderPage;
