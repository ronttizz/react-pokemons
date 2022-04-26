import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <p className={classes.copy}>
        <small>
          Pokemon App made using React. PokeAPI can be found{" "}
          <a href="https://pokeapi.co/" target="_blank">
            here
          </a>
          . Design Toni Nissinen
        </small>
      </p>
    </footer>
  );
};

export default Footer;
