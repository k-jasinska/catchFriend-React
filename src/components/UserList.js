import React from 'react';
import './UserList.css';
import ButtonDelete from './ButtonDelete.js';
import ButtonAdd from './ButtonAdd.js';

const UserList = (props) => {

    function searchingFor(term) {
        return function (props) {
            return props.name.first.toLowerCase().includes(term.toLowerCase()) || !term
        }
    }

    const users = props.users.filter(searchingFor(props.find)).map(user => (
        <div className="person" key={user.login.uuid}>
            <img src={user.picture.large} alt={user.name.last} />
            <h4>{`${user.name.first} ${user.name.last}`}</h4>
            <p>{user.email}</p>
            <ButtonDelete key={user.login.md5} delete={props.delete.bind(this, user.login.md5)} />
            <ButtonAdd key={user.login.uuid} />

        </div>
    ))

    return (
        <div style={{ padding: '20px' }} className="users">
            {users}
        </div>
    );
}

export default UserList;