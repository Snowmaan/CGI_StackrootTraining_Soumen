import React, { Component } from 'react';
import './App.css'
import Account from './Components/AccountDetails';

class App extends Component {
  state = {
    isLoaded : false,
    users: [],
    error: null,
  };

  fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
         users: data,
          isLoaded: true,
      })
      )
      .catch((error) => this.setState({ error, isLoaded:true}));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoaded, users, error } = this.state;
    return (
    <React.Fragment>
    <h1>Display Active Users Account Details</h1>
    {error ? <p>{error.message}</p> : null}
    {isLoaded ? ( users.map((user) => {return <Account user={user} />; }))
    : (<h3>Fetching Users...</h3>)}
    </React.Fragment> ); 
  } 
}


// condition ? dosomething : dosomethingelse

export default App;