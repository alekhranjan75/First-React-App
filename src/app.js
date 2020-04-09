import React, { Component } from "react";
import './app.css';
import Person from './Person/Person.js';
class App extends Component {
    render() {
        return ( 
        <div className = "App" >
            <h1 > Hi I 'm React</h1> 
            <Person name = "MAX" age = "28" />
            < Person name = "Manu" age = "29" />
            < Person name = "Mohan" age = "28" />
        </div>
        );
    }
}
export default App;