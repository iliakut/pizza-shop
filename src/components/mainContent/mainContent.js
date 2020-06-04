import React from "react";

const MainContent = ({menuItem}) => {
  console.log(menuItem)
  return (
    <div className="main-content">
      <p>{JSON.stringify(menuItem)}
      </p>
    </div>
  );
};

export default MainContent;
