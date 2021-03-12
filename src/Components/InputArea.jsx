import React from 'react';

const InputArea = (props) => {
    return (
        <div className='form'>
            <input 
                type='text' 
                onChange={props.onChange}
                value={props.text} 
            />
            <button
                onClick={props.onAdd}
            >
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;