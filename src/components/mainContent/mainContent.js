import React from "react";
import Card from "../../UI/card/card";

const MainContent = ({menuItem}) => {
  console.log(menuItem)
  const header = menuItem?.header;
  const menuPositions = menuItem?.items;
  return (
    <div className="mx-5 mt-2">
      <h1>{header}</h1>
      <div className="d-flex justify-content-start flex-wrap w-100">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default MainContent;
