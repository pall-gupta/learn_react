import React, { Component } from 'react';


class User extends Component {
    constructor() {
      super();
      this.state = {
        name: "Pallavi",
        age: 23,
        gender: "Male",
      };
    }
    render() {
        return (
          <div>
              <p>Name : {this.state.name}</p>
              <p>Age : {this.state.age}</p>
              <p>Gender : {this.state.gender} {this.state.gender === 'female' ? 
              ( "👩‍🦰" ) : "🧑 "}</p>
          </div>
        );
      }
  }
  export default User;
