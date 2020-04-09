import React, { Component } from "react";
import './app.css';
import Person from './Person/Person.js';
class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 28 },
            { name: "Min", age: 29 }, 
            { name: "Maxmin", age: 30 }
        ]
    }
    detailsHandeler = () => {
        this.setState({
            persons: [
            { name: "Maximum", age: 28 },
            { name: "Minimum", age: 29 }, 
            { name: "Maxiumminium", age: 30 }
            ]
        })
    }
    render() {
        return ( 
        <div className = "App" >
            <h1 > Hi I 'm React</h1> 
            <button  onClick = {this.detailsHandeler}>Change Details</button>
            < Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
            < Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} >My hobby is Singing</ Person>
            < Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
        </div>
        );
    }
}
export default App;