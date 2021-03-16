 import React, { Component } from 'react'
 
 export default class Form extends Component {
     constructor(){
         super();
         this.state = {
             name:"",
             age: "",
         };
     }
     FormSubmit  = (e) => {
        e.preventDefault();
        this.clearData();
    return(
        console.log("Submitted")
         )
    } 
   
    clearData  = () => {
        this.setState({
            name:"",
            age:"",
        })
    } 
    yourName  = (e) => {
        this.setState({
           name:e.target.value, 
        });
    } 
    yourAge  = (e) => {
        this.setState({
           age:e.target.value, 
        });
    } 
     render() {
         return (
             <form onSubmit={this.FormSubmit}> 
                 <input type="text" placeholder="What's your name" onChange={this.yourName} value={this.state.name}/><br/><br/>
                 <input type="number" placeholder="What's your age"  onChange={this.yourAge} value={this.state.age}/><br/><br/>
                 <button type="submit">Submit</button>
                 <p>{this.Data}</p>
             </form>
         )
     }
 }
 