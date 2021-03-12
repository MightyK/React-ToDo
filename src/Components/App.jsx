import React, {useState} from 'react';
import ToDoItem from './ToDoItem';
import InputArea from './InputArea';

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
        setTimeout(() => {
            setItems((prevItems) => {
                return prevItems.filter(
                    (item, index) => {
                        return index !== id;
                    }
                );
            });
            
        }, 300);
    }

    return (
        <div className='container'>
            <div className='heading'>
                <h1>To-Do List</h1>
            </div>
            <InputArea 
                add={addItem}
                change={handleChange}
                text={inputText}
            />
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