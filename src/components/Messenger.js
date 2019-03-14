import React, { Component } from 'react';
import './Messenger.css';


class Messenger extends Component {
    state = {
        messages: [],
        newMessage: '',
    }

    handleWrite = (e) => {
        console.log(e.target.value);
        this.setState({
            newMessage: e.target.value,
        })
    }
    handleSendClick = (person, message) => {
        console.log("wyslane");
        console.log(person, message);
        this.setState({
            newMessage: '',
        })
    }

    render() {
        const { index, chat, users } = this.props;
        const { newMessage } = this.state;
        const person = users.filter((user) => { return user.login.uuid === index });
        return (
            <div className="messenger">
                <div className="head">
                    <p className="person">{person[0].name.first} {person[0].name.last}</p>
                    <i className="fas fa-window-minimize minimalize msg-btn"></i>
                    <i className="fas fa-times close  msg-btn" onClick={chat}></i>
                </div>
                <div className="body"></div>
                <div className="bottom">
                    <textarea className="message" value={newMessage} placeholder="Napisz wiadomość..." onChange={this.handleWrite}></textarea>
                    <i className="far fa-share-square send" onClick={this.handleSendClick.bind(this, this.props.person, this.state.newMessage)}></i>
                </div>
            </div>
        );

    }
}
export default Messenger;