import React from "react";
import { Link, Outlet } from "react-router-dom";
import PokeSingle from "./PokeSingle";

const PokeList = () => {
  return (
    <div>
      <p>Pokemon list will be here</p>
      <Link to="pokemonsingle">Pokemon link</Link>
    </div>
  );
};

export default PokeList;
