import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, handler) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchmove ", handleClickOutside);
    document.addEventListener("touchstart ", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchmove ", handleClickOutside);
      document.removeEventListener("touchstart ", handleClickOutside);
      document.removeEventListener("scroll", handleClickOutside);
    };
  }, [handler, ref]);
}

function ClickOutside({children, handler}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, handler);

  return <div ref={wrapperRef}>{children}</div>;
}

export default ClickOutside;
