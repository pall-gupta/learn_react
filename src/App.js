import './App.css';
import React, { Component } from 'react';

import Button from './Button';


// function hello() {
//   return (
//     <div className="hello-world">
//         <img src={"https://i.pinimg.com/originals/9e/a7/2e/9ea72ef078139ced289852e8a4ea0c5c.gif"} alt="logo" />
//         <h1>
//          Happy Hacking 
//         </h1>
//     </div>
//   );
// }

// export default hello;


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }

  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {


    return (
      <div>
        Current count: {this.state.count}
        <hr />
        <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <Button sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
      </div>
    );
  }
}

export default App;
