import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import FavList from "./FavList";
import Home from "./Home";
import PokeList from "./PokeList";
import classes from "./Main.module.css";
import PokeSingle from "./PokeSingle";

const Main = () => {
  return (
    <main className={classes.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokelist" element={<PokeList />}>
          <Route path="pokemonsingle" element={<PokeSingle />} />
        </Route>
        <Route path="favlist" element={<FavList />} />
        <Route path="about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;
