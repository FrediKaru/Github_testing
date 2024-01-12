import React from "react";

//components
import { Button } from "./Button";

export const ListItem = ({ children }) => {
  return (
    <li className="navLink">
      <a href="">{children}</a>
    </li>
  );
};

export const Nav = ({ toggleTheme }) => {
  return (
    <div className="primary-header__layout">
      <h2>LOGO</h2>
      <nav>
        <ul>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>
            <Button onClick={toggleTheme}>Switch theme</Button>
          </ListItem>
        </ul>
      </nav>
    </div>
  );
};
