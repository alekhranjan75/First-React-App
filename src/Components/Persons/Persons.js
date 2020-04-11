import React from 'react';
import Person from './Person/Person';
const persons = (props) => (
    props.persons.map((person, index) => {
        return <Person name = {person.name} age = {person.age} clicked = {() => props.delete(index)} key = {person.id} changed = {(event) =>props.changedHandler(event, person.id)}/>
    })
)
export default persons;