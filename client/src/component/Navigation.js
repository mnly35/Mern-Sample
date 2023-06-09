import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        <li>
          <NavLink to="register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
