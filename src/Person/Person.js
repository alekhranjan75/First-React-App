import React from 'react';
import Radium from 'radium';
import './Person.css';
const person = (props) => {
    const personStyle = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
    < div className = "Person" >
        <p onClick = {props.clicked} > I 'm a {props.name} and {props.age} years old</p>
        <p>{props.children}</p>
        <input type = "text" onChange = {props.changed}  value = {props.name}/>
    </div>
    )
}
export default Radium(person);