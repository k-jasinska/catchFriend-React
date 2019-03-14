import React from 'react';
const ButtonChat = (props) => {
    return (
        <button onClick={props.chat} className="addbtn"><i className="far fa-comments"></i></button>
    );
}

export default ButtonChat;