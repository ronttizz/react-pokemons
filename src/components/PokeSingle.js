import React, { Component } from "react";

class PokeSingle extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.params.pokesingle}</h3>
        <p>Single pokemon will be here</p>
      </div>
    );
  }
}

export default PokeSingle;
