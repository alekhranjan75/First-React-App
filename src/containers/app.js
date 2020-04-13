import React, { Component } from "react";
import './app.css';
import Persons from '../Components/Persons/Persons.js';
import Cockpit from '../Components/Cockpit/Cockpit';
import Radium, {StyleRoot} from 'radium';
import AuthContext from '../Context/auth-Context';

class App extends Component {
    state = {
        persons: [
            { id: "p1", name: "Max", age: 28 },
            { id: "p2", name: "Min", age: 29 }, 
            { id: "p3", name: "Maxmin", age: 30 }
        ],
        someOtherState: "Some Value",
        showPersons: false,
        changeCounter: 0,
        authenticated: false
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

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            }
        })
        // console.log(this.state.changeCounter)
    }

    toggleHandler = () => {
        // const doesShow = this.state.showPersons;
        this.setState({showPersons: !this.state.showPersons});
    }

    loginHandler = () => {
        this.setState ({
            authenticated: !this.state.authenticated
        })
    }
    render() {
        let personsView = null;
        if (this.state.showPersons) {
            personsView =
                <Persons 
                    persons = {this.state.persons} 
                    delete = {this.deletePerson} 
                    changedHandler = {this.inputHandler}
                />
        }

        return ( 
        //Wrapping Everything inside StyleRoot for "mdeia Queries" to
        <StyleRoot> 
            <AuthContext.Provider value = {{authenticated: this.state.authenticated, login: this.loginHandler}}>
                <div className = "App" >
                < Cockpit 
                    title = {this.props.appName}
                    showPersons = {this.state.showPersons}
                    toggle = {this.toggleHandler} 
                    persons = {this.state.persons}
                />
                {personsView}
            </div>
            </AuthContext.Provider>
            
        </StyleRoot>
        
        );
    }
}
export default Radium(App);
