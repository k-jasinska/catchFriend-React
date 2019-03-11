import React from 'react';
import './ButtonFetchUsers.css';

const ButtonFetchUsers = (props) => {
    return (
        <button className="addPerson" onClick={props.click}>Find new peson</button>
    );
}

export default ButtonFetchUsers;