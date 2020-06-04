import React from "react";

const MainContent = ({menuItems}) => {
  return (
    <div className="main-content">
      <p>{menuItems}
      </p>
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default MainContent;
