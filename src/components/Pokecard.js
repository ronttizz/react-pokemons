import React from "react";
import { Link } from "react-router-dom";

import classes from "./Pokecard.module.css";

const Pokecard = (props) => {
  return (
    <div className={classes.pokecard}>
      <img src={props.img} alt={props.name} />
      <h4>{props.name}</h4>
      <p>Stats and info</p>
      <Link to={props.name}>See more</Link>
    </div>
  );
};

export default Pokecard;
