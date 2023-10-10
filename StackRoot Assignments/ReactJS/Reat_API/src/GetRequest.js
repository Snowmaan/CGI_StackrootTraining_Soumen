import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component{
    state = {
        persons: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
                const persons = res.data;
                this.setState({ persons });
        })
    }
    
    render(){
        return(
            <ul>
                {this.state.persons.map(person =><li>person.username</li>)}
            </ul>
        )
    }
}