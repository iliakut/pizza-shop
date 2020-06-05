import React from "react";
import Header from "../../UI/header/header";
import Card from "../../UI/card/card";

const MainContent = ({menuItem}) => {
  console.log(menuItem)
  const header = menuItem?.header;
  const menuPositions = menuItem?.items;
  return (
    <div className="m-2 px-2 pb-2">
      <Header text={header}/>
      <Card/>
    </div>
  );
};

export default MainContent;
