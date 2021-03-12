import React, {useState} from 'react';
import ToDoItem from './ToDoItem';
const App = () => {

    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);

    const handleChange = (event) => {
        const newValue = event.target.value;
        
        setInputText(newValue);
    }

    const addItem = () => {
        setItems( (prevItems) => {
            return [
                ...prevItems,
                inputText
            ];
        });
        setInputText('');
    }

    const deleteItem = (id) => {
        setItems((prevItems) => {
            return prevItems.filter(
                (item, index) => {
                    return index !== id;
                }
            );
        });
    }

    return (
        <div className='container'>
            <div className='heading'>
                <h1>To-Do List</h1>
            </div>
            <div className='form'>
                <input 
                    type='text' 
                    onChange={handleChange}
                    value={inputText} 
                />
                <button
                    onClick={addItem}
                >
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map( (todoItem, index) => {
                        return(
                            <ToDoItem 
                                key={index}
                                id={index}
                                text={todoItem} 
                                onChecked={deleteItem}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;