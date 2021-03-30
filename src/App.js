// import './App.css';
// import React from 'react';

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



import React, { Component } from "react";
import Welcome from "./Welcome";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userProfile: {
        name: "jorav",
        age: 23,
        gender: "female",
      },
      users: ["Jorav", "Pallavi", "Gaurav", "Taaj"],
    };
  }
  render() {
    // return (
    //   <div>
    //     <h1>Username: {this.state.userProfile.name}</h1>
    //     <h1>Age: {this.state.userProfile.age}</h1>
    //     <h1>Gender: {this.state.userProfile.gender} {this.state.userProfile.gender === 'male' ? "👲": "👩‍💻"} </h1>
    //   </div>
    // );
    const element = this.state.users.map((user) => <Welcome name={user} key={user} />);
    return <div>{element}
    
    <div>
        <h1>Username: {this.state.userProfile.name}</h1>
        <h1>Age: {this.state.userProfile.age}</h1>
        <h1>Gender: {this.state.userProfile.gender} {this.state.userProfile.gender === 'male' ? "👲": "👩‍💻"} </h1>
      </div>
    </div>;
  }
}