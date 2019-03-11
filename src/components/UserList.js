import React from 'react';
import './UserList.css';
import ButtonDelete from './ButtonDelete.js';
import ButtonAdd from './ButtonAdd.js';

const UserList = (props) => {
    const users = props.users.map(user => (
        <div className="person" key={user.login.uuid}>
            <img src={user.picture.large} alt={user.name.last} />
            <h4>{`${user.name.title} ${user.name.last}`}</h4>
            <p>{user.email}</p>
            <ButtonDelete key={user.login.uuid} delete={props.delete.bind(this, user.login.uuid)} />
            <ButtonAdd key={user.login.uuid} />

        </div>
    ))

    return (
        <div className="users">
            {users}
        </div>
    );
}

export default UserList;