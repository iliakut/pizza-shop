import React from "react";
import "./orderPage.css"

const OrderPage = ({cartItems, flatMenu}) => {
  console.log(cartItems, flatMenu);
  const newCartItems = {...cartItems};
  delete newCartItems.count;

  const itemIds = Object.keys(newCartItems);

  const CartItems = itemIds.map(id => {
    const menuItem = flatMenu.find(item => Number(item.id) === Number(id));

    return (
      <div key={id} className="mb-3 mr-5 p-3 order-item d-flex justify-content-between ">
        <div>
          <h4>{menuItem.name}</h4>
        <img
          className="image-order mr-2"
          src={menuItem.img}
          alt={menuItem.name}
        />
        </div>
        <div>
          number: {newCartItems[id]}
        </div>
        <div>
          price: {menuItem.price}
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
