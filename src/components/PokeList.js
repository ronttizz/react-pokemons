import React, { Component } from "react";
import Pokecard from "./Pokecard";

import classes from "./Pokelist.module.css";

class PokeList extends Component {
  state = {
    pokemons: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((p) => {
          return fetch(p.url).then((res) => res.json());
        });
        Promise.all(fetches).then((res) => {
          this.setState({ pokemons: ["toni"], isLoading: false });
          console.log(this.state.pokemons);
        });
      });
  }

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let fetches = data.results.map((pokemon) => {
  //         return fetch(pokemon.url).then((res) => res.json());
  //       });
  //       Promise.all(fetches).then((res) => {
  //         console.log(res);
  //         this.setState({ pokemons: res, isLoading: false });
  //       });
  //     });
  // }

  render() {
    if (this.state.isLoading) {
      return <p className={classes.loading}>Loading...</p>;
    }
    return (
      <div>
        <h3 className={classes.header}>List of pokemons</h3>
        <div className={classes.listing}>
          {this.state.pokemons.map((p) => {
            <Pokecard name={p.name} key={p.name} />;
          })}
          <Pokecard name="toni" />
        </div>
      </div>
    );
  }
}

export default PokeList;
