import React from "react";
import "./sidebar.css"
import Burger from "../../UI/burger/burger";
import {Link} from "react-router-dom";

const Sidebar = ({menuItems}) => {
  const Buttons = menuItems.map(item => {
    return (
     <Link
       to={`${process.env.PUBLIC_URL}/${item.header}`}
       key={item.id}>
      <button
        type="button"
        className="btn btn-primary mt-2 w-100">
        {item.header}
      </button>
     </Link>
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
