import React from "react";
import { Link } from "react-router-dom";

const PokeList = () => {
  return (
    <div>
      <p>Pokemon list will be here</p>
      <Link to="pokemonsingle">Pokemon link</Link>
    </div>
  );
};

export default PokeList;
