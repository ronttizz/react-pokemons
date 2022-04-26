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
        console.log(data.results);
        const fetches = data.results.map((p) => {
          return fetch(p.url).then((res) => res.json());
        });
        Promise.all(fetches).then((data) => {
          this.setState({
            pokemons: data,
            isLoading: false,
          });
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p className={classes.loading}>Loading...</p>;
    }
    return (
      <div>
        <h3 className={classes.header}>List of pokemons</h3>
        <div className={classes.listing}>
          {this.state.pokemons.map((p) => {
            return <Pokecard name={p.name} key={p.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default PokeList;
