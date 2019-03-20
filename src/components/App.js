
// //imr lub irmc, cc-nowy komponent klasowy sfc-funkcyjny
import React, { Component } from 'react';
import './App.css';
import ButtonFetchUsers from './ButtonFetchUsers.js';
import UserList from './UserList.js';
import Search from './Search.js';
import Messenger from './Messenger.js';

const API = 'https://randomuser.me/api/?results=1';


class App extends Component {
  state = {
    users: [],
    find: '',
    newChat: false,
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
    const indexMessenger = people.findIndex(user => user.login.uuid === this.state.newChat)
    people.splice(index, 1)

    if (indexMessenger === index) {
      this.setState({
        users: people,
        newChat: '',
      })
    }
    else {
      this.setState({
        users: people,
      })
    }
  }

  handleSearch = (e) => {
    this.setState({
      find: e.target.value,
    })
  }

  handleButtonChat = (uuid) => {
    this.setState({
      newChat: uuid
    })
  }

  handleButtonCloseChat = () => {
    this.setState((prevState) => {
      return {
        newChat: ''
      }
    })
  }

  render() {
    const { users, find, newChat } = this.state;
    return (
      <>
        <div className="background-image"></div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users.length > 0 ? <UserList chat={this.handleButtonChat} find={find} users={users} delete={this.handleDelete} /> : users}
        <Search value={find} search={this.handleSearch} />
        {newChat ? <Messenger index={newChat} users={users} chat={this.handleButtonCloseChat} /> : null}
      </>
    );
  }
}

export default App;

