import React, { Component } from 'react';


class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  Addition = () => {
    return(
    this.setState({ counter: this.state.counter + 1 })
      // console.log("add")
    )
  }
  Substraction = () => {
    return(
      this.setState({ counter: this.state.counter - 1 })
      // console.log("subtract")
    )
  }
  render() {
    return (
      <div>
          <p>Counter = {this.state.counter}</p>
          <button onClick={this.Addition}>+</button>
          <button onClick={this.Substraction}>-</button>
      </div>
    );
  }
}

export default Counter;


