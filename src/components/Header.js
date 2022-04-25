import React from "react";

import classes from "./Header.module.css";

import Nav from "./Nav";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Header will be here</h1>
      <Nav />
    </header>
  );
};

export default Header;
