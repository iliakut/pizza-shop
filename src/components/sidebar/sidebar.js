import React from "react";
import "./sidebar.css"
import Burger from "../../UI/burger/burger";
import {Link} from "react-router-dom";
import SidebarPlaceholder from "./sidebarPlaceholder/sidebarPlaceholder";

const Sidebar = ({menuItems}) => {
  let Buttons = menuItems.map(item => {
    return (
     <Link
       to={`/menu/${item.header}`}
       key={item.id}>
      <button
        type="button"
        className="btn btn-primary mt-2 w-100">
        {item.header}
      </button>
     </Link>
    )
  });

  if (!Buttons.length) {
    Buttons = <SidebarPlaceholder/>
  }

  return (
    <div className="sidebar rounded m-2 px-2 pb-2">
      <div className="sidebar-items">
        {Buttons}
      </div>
      <div className="sidebar-burger-menu">
        <Burger>
          {Buttons}
        </Burger>
      </div>
    </div>
  );
};

export default Sidebar;
