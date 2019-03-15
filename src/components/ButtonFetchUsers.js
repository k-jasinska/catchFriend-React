import React from 'react';
import './ButtonFetchUsers.css';

const ButtonFetchUsers = (props) => {
    return (
        <button className="addPerson" onClick={props.click}><i className="fas fa-plus"></i></button>
    );
}

export default ButtonFetchUsers;