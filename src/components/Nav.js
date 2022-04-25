import React from "react";
import { Link } from "react-router-dom";

import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul className={classes.listitem}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokelist">PokeList</Link>
        </li>
        <li>
          <Link to="/favlist">FavList</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
