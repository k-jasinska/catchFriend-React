
// //imr lub irmc, cc-nowy komponent klasowy sfc-funkcyjny
import React, { Component } from 'react';
import './App.css';
import ButtonFetchUsers from './ButtonFetchUsers.js';
import UserList from './UserList.js';

const API = 'https://randomuser.me/api/?results=1';


class App extends Component {
  state = {
    users: [],
  }

  handleDataFetch = () => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        const user = data.results;
        this.setState(prevState => ({
          users: user.concat(prevState.users)
        }))
      })
  }


  handleDelete = (id) => {
    const people = [...this.state.users];
    const index = people.findIndex(user => user.login.uuid === id)
    people.splice(index, 1)
    this.setState({
      users: people,
    })

  }

  render() {
    const users = this.state.users;
    return (
      <>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users.length > 0 ? <UserList users={users} delete={this.handleDelete} /> : users}
      </>
    );
  }
}

export default App;

