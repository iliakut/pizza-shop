import React from "react";
import "./orderPage.css"

const OrderPage = ({cartItems, flatMenu, currencyRate}) => {
  console.log(cartItems, flatMenu);
  const newCartItems = {...cartItems};
  delete newCartItems.count;

  const itemIds = Object.keys(newCartItems);

  const CartItems = itemIds.map(id => {
    const menuItem = flatMenu.find(item => Number(item.id) === Number(id));
    const {name, img, price} = menuItem;
    const quantity = newCartItems[id];
    const allPrice = (price * quantity).toFixed(2);
    const allPriceDollars = (allPrice * currencyRate).toFixed(2);

    return (
      <div key={id} className="mb-3 mr-5 p-3 order-item d-flex justify-content-between align-items-center">
        <div>
          <h4>{name}</h4>
        <img
          className="image-order mr-2 border border-secondary rounded"
          src={menuItem.img}
          alt={menuItem.name}
        />
        </div>
        <div>
          <button type="button" className="btn btn-secondary">
            <strong>
              -
            </strong>
          </button>
          <span className="mx-2">{quantity}</span>
          <button type="button" className="btn btn-secondary">
            <strong>
              +
            </strong>
          </button>
        </div>
        <div>
          <span className="mr-2">{`${allPrice}€ / ${allPriceDollars}$`}</span>
          <button type="button" className="btn btn-secondary">
            <strong>
              x
            </strong>
          </button>
        </div>
      </div>
    )
  });

  return (
    <div className="mr-2 mt-2 order-page">
      <h1>Order</h1>
      {CartItems}
    </div>
  );
};

export default OrderPage;
