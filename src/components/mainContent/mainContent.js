import React from "react";
import Card from "../../UI/card/card";

const MainContent = ({menuItem, addToCart, currencyRate}) => {
  const header = menuItem?.header;
  const menuPositions = menuItem?.items;
  let Cards;

  if (menuPositions) {
    Cards = menuPositions.map(position => {
      return (
        <Card
          key={header + position.id}
          name={position.name}
          description={position.description}
          imageUrl={position.img}
          addToCart={() => addToCart(position.id)}
          price={position.price}
        />
      )
    }) ;
  }

  return (
    <div className="mr-2 mt-2">
      <h1>{header}</h1>
      <div className="d-flex justify-content-start flex-wrap w-100">
        {Cards}
      </div>
    </div>
  );
};

export default MainContent;
