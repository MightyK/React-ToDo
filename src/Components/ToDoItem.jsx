import React from 'react';


const ToDoItem = (props) => {

    const handleClick = () => {
        props.onChecked(props.id);
    }

    return(
        <div>
            <li 
                onClick={handleClick} 
            >
                {props.text}
            </li>
        </div>
    );
}

export default ToDoItem;