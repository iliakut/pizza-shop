import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, handler) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
        //alert("You clicked outside of me!");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler, ref]);
}

function ClickOutside({children, handler}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, handler);

  return <div ref={wrapperRef}>{children}</div>;
}

export default ClickOutside;
