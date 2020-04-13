import React from 'react';
import Radium from 'radium';
import './Person.css';
import AuthContext from '../../../Context/auth-Context'

class Person extends React.Component {
    constructor (props) {
        super(props)
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    render() {
        const personStyle = {
            '@media (min-width: 500px)': {
                width: '450px'
            }
        }
        return (
        < div className = "Person" >
            <AuthContext.Consumer> 
                {value => value.authenticated ? <p>Authenticated</p> : null} 
            </AuthContext.Consumer>
            <p onClick = {this.props.clicked} > I 'm a {this.props.name} and {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type = "text" ref = {this.inputElementRef} onChange = {this.props.changed}  value = {this.props.name}/>
        </div>
        )
    }
}
export default Radium(Person);