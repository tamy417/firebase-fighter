import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "text-purple-700" : ` ${className}`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyLink;
