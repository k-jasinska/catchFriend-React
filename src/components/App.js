
// //imr lub irmc, cc-nowy komponent klasowy sfc-funkcyjny
import React, { Component } from 'react';
import './App.css';
import ButtonFetchUsers from './ButtonFetchUsers.js';
import UserList from './UserList.js';
import Search from './Search.js';

const API = 'https://randomuser.me/api/?results=1';


class App extends Component {
  state = {
    users: [],
    find: '',
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


  handleDelete = (md5) => {
    const people = [...this.state.users];
    const index = people.findIndex(user => user.login.md5 === md5)
    people.splice(index, 1)
    this.setState({
      users: people,
    })
  }

  handleSearch = (e) => {
    this.setState({
      find: e.target.value,
    })
  }

  render() {
    const users = this.state.users;
    return (
      <>
        <div className="background-image"></div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users.length > 0 ? <UserList find={this.state.find} users={users} delete={this.handleDelete} /> : users}
        <Search value={this.state.find} search={this.handleSearch} />
      </>
    );
  }
}

export default App;

