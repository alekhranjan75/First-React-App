import React from 'react';
import Radium from 'radium';

const cockpit = (props) => {
    const btnStyle = {
        backgroundColor: 'green',
        font: 'inherit',
        border:'2px solid black',
        padding: '10px',
        cursor: 'pointer',
        margin: "20px auto",
        color: 'white',
        [':hover'] : {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    }

    if(props.showPersons) {
        btnStyle.backgroundColor = "red";
        btnStyle[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }

    let dynamicClassName = []
    if(props.persons.length <= 2) {
        dynamicClassName.push('red') //dynamicClassName = ['red']
    }
    if (props.persons.length <= 1) {
        dynamicClassName.push('bold') //dynamicClassName = ['red']
    }
        
    return(
    <div>
        <h1 > {props.title}</h1> 
        <p className = {dynamicClassName.join(" ")}>Dynamic Class Name and Styling</p>
        <button  className = "btn" onClick = {props.toggle} style = {btnStyle}>Toggle Persons</button>
    </div>
    )
}
export default Radium(cockpit);