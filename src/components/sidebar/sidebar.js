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
      <div className="sidebar__items">
        {Buttons}
      </div>
      <details className="sidebar-burger-menu">
          <summary className="btn btn-primary sidebar-burger-menu__summary px-1 py-0">
          <svg className="bi bi-list"
               width="1em"
               height="1em"
               viewBox="0 0 16 16"
               fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path
                  d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </summary>
        <div className="sidebar-burger-menu__content rounded mt-2 px-2 pb-2">
          {Buttons}
        </div>
      </details>
    </div>
  );
};

export default Sidebar;
