import React from 'react';
import './UserList.css';
import ButtonDelete from './ButtonDelete.js';

const UserList = (props) => {
    const users = props.users.map(user => (
        <div className="person" key={user.login.uuid}>
            <img src={user.picture.large} alt={user.name.last} />
            <h4>{`${user.name.title} ${user.name.last}`}</h4>
            <p>{user.email}</p>
            <ButtonDelete />
        </div>
    ))
    return (
        <div className="users">
            {users}
        </div>
    );
}

export default UserList;