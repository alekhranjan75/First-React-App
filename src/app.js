import React, { Component } from "react";
import {useState} from "react";
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
    detailsHandeler = (p1, p2, p3) => {
        this.setState({
            persons: [
            { name: p1, age: 28 },
            { name: p2, age: 29 }, 
            { name: p3, age: 30 }
            ]
        })
    }
    
    specificPersonHandler = (p2Name) => {
        this.setState({
            persons: [
            { name: "Max", age: 28 },
            { name: p2Name, age: 29 }, 
            { name: "Maxmin", age: 30 }
            ]
        })
    }

    inputHandler = (event) => {
        this.setState({
            persons: [
            { name: event.target.value, age: 28 },
            { name: "Manu", age: 29 }, 
            { name: "Maxmin", age: 30 }
            ]
        })
    }
    render() {
        //Inline CSS for Button
        const butStyle = {
            backgroundColor: "blue",
            font: 'inherit',
            border: '2px solid black',
            padding: '10px',
            cursor: 'pointer'
        };
        return ( 
        <div className = "App" >
            <h1 > Hi I'm React</h1> 
            < button  style = {butStyle} onClick = {() => this.detailsHandeler("Name1", "Name2", "Name3")} > Change Details </button>

            < Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} changed ={this.inputHandler}/>

            < Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} clicked = {this.specificPersonHandler.bind(this, "Changed Manu")} >My hobby is Singing</ Person>
            
            < Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
        </div>
        );
    }
}
export default App;

//Use of Hooks for Functional Components
/* const app = (props) => {
    const [personsState, setPersonsState] = useState({
        persons:[
                { name: "Max", age: 28 },
                { name: "Min", age: 29 }, 
                { name: "Maxmin", age: 30 }
            ]
    })
    const detailsHandeler = () => {
        setPersonsState({
            persons:[
                { name: "Maxiii", age: 28 },
                { name: "Miniii", age: 29 }, 
                { name: "Maxminii", age: 30 }
            ]
        })
    }
    return (
        <div className = "App" >
            <h1 > Hi I 'm React</h1> 
            <button  onClick = {detailsHandeler}>Change Details</button>
            < Person name = {personsState.persons[0].name} age = {personsState.persons[0].age} />
            < Person name = {personsState.persons[1].name} age = {personsState.persons[1].age} >My hobby is Singing</ Person>
            < Person name = {personsState.persons[2].name} age = {personsState.persons[2].age} />
        </div>
        );
}
export default app; */