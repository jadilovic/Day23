// src/SimpleForm.js
import React, { Component } from "react";

class SimpleForm extends Component {
  render() {
    return (
      <form>
        <h1>Name: {this.state.name}</h1>
        <p>First name:</p>
        <input type="text" onChange={this.onChangeHandler} />
      </form>
    );
  }
}
