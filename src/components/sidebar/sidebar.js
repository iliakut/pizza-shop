import React from "react";
import "./sidebar.css"

const Sidebar = ({menuItems}) => {
  const Buttons = menuItems.map(item => {
    return (
      <button key={item.id} type="button" className="btn btn-primary mt-2">{item.header}</button>
    )
  });

  return (
    <div className="sidebar rounded m-2 px-2 pb-2">
      {Buttons}
    </div>
  );
};

export default Sidebar;
