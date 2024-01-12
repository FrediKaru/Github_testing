import React from "react";

export const Button = ({ onClick, children, additionalClasses, ...rest }) => {
  const btnClasses = `btn ${additionalClasses || ""}`;

  return (
    <button className={btnClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
