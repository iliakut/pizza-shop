import React from "react";

const SidebarPlaceholder = () => {
  const arr = Array(3).fill(1);
  const Buttons = arr.map((item, index) => {
    return (
      <button
        key={index}
        type="button"
        className="btn btn-primary mt-2 w-100">
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
    )
   });

  return (
    <div>
      {Buttons}
    </div>
  );
};

export default SidebarPlaceholder;
