import React from 'react';
import { useTodoContext } from '../../context/TodoContext';
import './TodoItem.css'

const TodoItem = ({ id, text, completed }) => {
    const { dispatch } = useTodoContext();

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this todo?");
        if (confirmDelete) {
            dispatch({ type: 'DELETE_TODO', id });
        }
    };

    return (
        <div className="todo-item">
            <div className="todo-details">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => dispatch({ type: 'TOGGLE_TODO', id })}
                />
                <span className='todo-text'>{text}</span>
            </div>

            <span onClick={handleDelete} className='delete-todo'>x</span>
        </div>
    );
};

export default TodoItem;