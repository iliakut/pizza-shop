import React from "react";
import "./sidebar.css"
import Burger from "../../UI/burger/burger";

const Sidebar = ({menuItems}) => {
  const Buttons = menuItems.map(item => {
    return (
      <button key={item.id} type="button" className="btn btn-primary mt-2">{item.header}</button>
    )
  });

  return (
    <div className="sidebar rounded m-2 px-2 pb-2">
      <div className="sidebar__items">
        {Buttons}
      </div>
      <div className="sidebar__burger-menu">
        <Burger>
          {Buttons}
        </Burger>
      </div>
    </div>
  );
};

export default Sidebar;
