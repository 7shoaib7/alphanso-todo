import React from 'react';
import { useTodoContext } from '../../context/TodoContext';
import completeTodo from "../../assets/completed.png"
import incompleteTodo from "../../assets/incomplete.png"
import closeIcon from "../../assets/close.png"
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
        <div className="todo-item" style={{
            border: completed ? '1px solid #00a278' : '2px solid #F0F0F0',
            background: completed ? '#e9f5e1' : '#f0f0f0'
        }}>
            <div className="todo-details">
                <img
                    src={completed ? completeTodo : incompleteTodo}
                    className="todo-check"
                    alt={`todo-${completed}`}
                    onClick={() => dispatch({ type: 'TOGGLE_TODO', id })} 
                />
                <span className='todo-text'>{text}</span>
            </div>
            <img src={closeIcon} alt="closeIcon" onClick={handleDelete} className="delete-icon"/>
        </div>
    );
};

export default TodoItem;