import React from "react";
import { BrowserRouter, useParams } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import FavList from "./components/FavList";
import Home from "./components/Home";
import PokeList from "./components/PokeList";
import PokeSingle from "./components/PokeSingle";
import Layout from "./pages/Layout";

import "./App.css";

const RouterWrapper = (props) => {
  const params = useParams();
  return <PokeSingle params={params} {...props} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="pokelist" element={<PokeList />} />
          <Route path="pokelist/:pokemonsingle" element={<RouterWrapper />} />
          <Route path="favlist" element={<FavList />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
