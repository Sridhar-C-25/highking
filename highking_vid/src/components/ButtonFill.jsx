import React from "react";

const ButtonFill = ({ children }) => {
  return (
    <button
      className="bg-primary text-white rounded-full shadow-sm
    shadow-primary font-semibold md:text-sm text-xs tracking-wide md:px-9 px-7 py-3"
    >
      {children}
    </button>
  );
};

export default ButtonFill;
