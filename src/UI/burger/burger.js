import React from "react";
import "./burger.css"

const Burger = ({children}) => {
  return (
    <div className="burger">
      <details>
        <summary className="btn btn-primary burger__summary px-1 py-0">
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
        <div className="burger__content rounded mt-2 px-2 pb-2">
          {children}
        </div>
      </details>
    </div>
  );
};

export default Burger;
