import React, {useState} from 'react';


const ToDoItem = (props) => {
    const [done, setDone] = useState({textDecoration: 'none'});

    const handleClick = () => {
        setDone({textDecoration: 'line-through'});
    }

    return(
        <div>
            <li onClick={handleClick} style={done}>{props.text}</li>
        </div>
    );
}

export default ToDoItem;