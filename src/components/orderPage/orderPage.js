import React from "react";

const OrderPage = ({cartItems, flatMenu}) => {
  console.log(cartItems, flatMenu)
  const newCartItems = {...cartItems};
  delete newCartItems.count;

  const itemIds = Object.keys(newCartItems);

  const CartItems = itemIds.map(id => {
    const menuItem = flatMenu.find(item => Number(item.id) === Number(id));

    return <div key={id}>name: {menuItem.name} number: {newCartItems[id]} price: {menuItem.price}</div>
  });
  return (
    <div className="mr-2 mt-2">
      {CartItems}
    </div>
  );
};

export default OrderPage;
