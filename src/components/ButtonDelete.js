import React from 'react';

const ButtonDelete = (props) => {
    return (
        <button className="delButton" onClick={props.delete}><i class="far fa-trash-alt"></i> delete</button>
    );
}

export default ButtonDelete;