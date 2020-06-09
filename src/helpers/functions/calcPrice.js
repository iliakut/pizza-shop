const calcPrice = (cartItems, flatMenu) => {
  const newCartItems = {...cartItems};
  delete newCartItems.count;
  let mainPrice = 0;
  const itemIds = Object.keys(newCartItems);

  itemIds.forEach(id => {
    const menuItem = flatMenu.find(item => Number(item.id) === Number(id));
    if (menuItem) {
      const quantity = newCartItems[id];
      const {price} = menuItem;
      const allPrice = (price * quantity);

      mainPrice += allPrice;
    }

  });
  return mainPrice;
};

export default calcPrice;
