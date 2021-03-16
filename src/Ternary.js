import React, { Component } from 'react';
import "./App.css"

class User extends Component {
    constructor() {
      super();
      this.state = {
        name: "Pallavi",
        age: 23,
        gender: "male",
      };
    }
    render() {
        const { gender } = this.state;
        return (
          <div className={gender==="female" ? "female" : "male"} >
              <p>Name : {this.state.name}</p>
              <p>Age : {this.state.age}</p>
              <p>Gender : {this.state.gender} {this.state.gender === 'female' ? ( "👩‍🦰" ) : "🧑 "}</p>
          </div>
        );
      }
  }
  export default User;
