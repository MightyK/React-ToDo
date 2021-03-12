import React from 'react';

const InputArea = (props) => {
    return (
        <div className='form'>
            <input 
                type='text' 
                onChange={props.change}
                value={props.text} 
            />
            <button
                onClick={props.add}
            >
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;