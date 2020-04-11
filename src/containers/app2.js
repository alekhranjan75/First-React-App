import React, { Component } from "react";
import {useState} from "react";
import './app.css';
import Person from './Person/Person.js';
const CharComponent = (props) => {
    const charStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
    }
    return (<div className = "char" style = {charStyle}>
                <p onClick = {props.delete}>The text is: {props.text}</p>
            </div>
    )
}
class App extends Component {
    state = {
        count: 0,
        inputText: ""
    }
    changeListener = () => {
        let textArray = event.target.value
        let len = textArray.length
        // console.log(len)
        this.setState({count: len, inputText: textArray})
        console.log(this.state.inputText)
    }
    deleteEvent = (index) => {
        //copy of state "inputText"
        const text2 = this.state.inputText
        let text2Array = text2.split("")
        text2Array.splice(index, 1)
        let len = text2Array.length
        console.log(text2Array)
        this.setState({count: len, inputText: text2Array.join("") })
        // console.log(this.state.inputText)

    }
    render() {

        let ValidationComponent = null;
        if (this.state.count < 5) {
            ValidationComponent = (
                <div>
                    <p>Text too short</p>
                </div>
            )    
        }
        else if (this.state.count >= 5){
            ValidationComponent = (
                <div>
                    <p>Text long enough</p>
                </div>
            )  
        }
        
        // let inputArray = null;

        let  BlockChar = (
            <div>
                {
                    this.state.inputText.split("").map((val, index) => {
                        // console.log(val)
                        return <CharComponent text =  {val} delete ={ () => this.deleteEvent(index)} />
                    })
                }
            </div>
        )
        
        return(
            <div>
                <input type = "text" onChange = {this.changeListener} value = {this.state.inputText} ></input>
                <p>{this.state.count} The text is : {this.state.inputText}</p>
                { ValidationComponent }
                {BlockChar}
            </div>
        )
    }
}
export default App;