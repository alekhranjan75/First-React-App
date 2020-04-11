import React, { Component } from "react";
import {useState} from "react";
import './app.css';
import Person from './Person/Person.js';
import Radium, {StyleRoot} from 'radium';
class App extends Component {
    state = {
        persons: [
            { id: "p1", name: "Max", age: 28 },
            { id: "p2", name: "Min", age: 29 }, 
            { id: "p3", name: "Maxmin", age: 30 }
        ],
        someOtherState: "Some Value",
        showPersons: false
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
    
    deletePerson = (index) => {
        //Creating a copy of the original State
        const persons = [...this.state.persons];
        //Removing the current index person
        persons.splice(index, 1)
        //Updatingthe state
        this.setState({persons: persons})
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

    inputHandler = (event, id) => {
        console.log("Input Handler Invoked")
        //Finding the index with the specific id
        const personIndex = this.state.persons.findIndex(p => p.id === id)
        //Storing details of that persons
        const person = this.state.persons[personIndex]
        //Changingthe name attribute of the person
        person.name = event.target.value
        //Creatinga copy of the original state
        const persons = [...this.state.persons]
        //Updating the value in the new array
        persons[personIndex] = person

        this.setState({persons: persons })
    }

    toggleHandler = () => {
        // const doesShow = this.state.showPersons;
        this.setState({showPersons: !this.state.showPersons});
    }
    render() {
        //Inline CSS for Button
        const butStyle = {
            backgroundColor: "green",
            font: 'inherit',
            border: '2px solid black',
            padding: '10px',
            cursor: 'pointer',
            margin: "20px auto",
            cursor: 'pointer',
            color: 'white',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };
        let personsView = null;
        if (this.state.showPersons) {
            personsView = (
            <div>
                {
                    this.state.persons.map((person, index) => {
                        return <Person name = {person.name} age = {person.age} clicked = {() => this.deletePerson(index)} key = {person.id} changed = {(event) => this.inputHandler(event, person.id)}/>
                    })
                    
                /* < button  style = {butStyle} onClick = {() => this.detailsHandeler("Name1", "Name2", "Name3")} > Change Details </button>

                < Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} changed ={this.inputHandler}/>

                < Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} clicked = {this.specificPersonHandler.bind(this, "Changed Manu")} >My hobby is Singing</ Person>
                
                < Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} /> */}                
            </div>
            )
            butStyle.backgroundColor = "red";
            butStyle[':hover'] = {
                backgroundColor: 'salmon',
                    color: 'black'
            }
        }
        let dynamicClassName = []
        if(this.state.persons.length <= 2) {
            dynamicClassName.push('red') //dynamicClassName = ['red']
        }
        if (this.state.persons.length <= 1) {
            dynamicClassName.push('bold') //dynamicClassName = ['red']
        }

        return ( 
        //Wrapping Everything inside StyleRoot for "mdeia Queries" to work
        <StyleRoot> 
            <div className = "App" >
            <h1 > Hi I'm React</h1> 
            <p className = {dynamicClassName.join(" ")}>Dynamic Class Name and Styling</p>
            <button onClick = {this.toggleHandler} style = {butStyle}>Toggle Persons</button>
            {/* {   this.state.showPersons ? //Ternary operator to toggle
                <div>
                    < button  style = {butStyle} onClick = {() => this.detailsHandeler("Name1", "Name2", "Name3")} > Change Details </button>

                    < Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} changed ={this.inputHandler}/>

                    < Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} clicked = {this.specificPersonHandler.bind(this, "Changed Manu")} >My hobby is Singing</ Person>
                    
                    < Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
                </div> : null
            } */}
            {personsView}
        </div>
        </StyleRoot>
        
        );
    }
}
export default Radium(App);

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
