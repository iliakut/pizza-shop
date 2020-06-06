import React, {useState} from "react";
import "./burger.css"
import ClickOutside from "../../helpers/components/clickOutside/clickOutside";

const Burger = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDetailsClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen)
  };

  return (
    <ClickOutside handler={() => setIsOpen(false)}>
      <div className="burger">
        <details open={isOpen} onClick={(event) => handleDetailsClick(event)}>
          <summary className="btn btn-primary burger__summary px-1 py-0 my-1">
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
    </ClickOutside>
  );
};

export default Burger;
