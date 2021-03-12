import React from 'react';


const ToDoItem = (props) => {

    const handleClick = () => {
        props.onChecked(props.id);
    }

    return(
            <li style={props.toDelete} onClick={handleClick}>
                {props.text}
            </li>
    );
}

export default ToDoItem;