import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.weatherMethod}>
        <input type="text" name="city" placeholder="Town" />
        <button>Getting Weather</button>
      </form>
    );
  }
}
