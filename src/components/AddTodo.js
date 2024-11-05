import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoActions';

function AddTodo() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            const newTodo = { id: Date.now(), text: inputValue };
            dispatch(addTodo(newTodo));
            setInputValue('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Добавить задачу" />
            <button onClick={handleAddTodo}>Добавить</button>
        </div>
    );
}

export default AddTodo;