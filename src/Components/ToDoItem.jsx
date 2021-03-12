import React, {useState} from 'react';


const ToDoItem = (props) => {
    const [toDelete, setToDelete] = useState({textDecoration:'none'});
    
    const handleClick = () => {
        setToDelete({textDecoration: 'line-through'});
        props.onChecked(props.id);
        setTimeout(() => {
            setToDelete({textDecoration:'none'});
        }, 299);
    }

    return(
            <li style={toDelete} onClick={handleClick}>
                {props.text}
            </li>
    );
}

export default ToDoItem;