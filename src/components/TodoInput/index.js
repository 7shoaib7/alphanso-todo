import React, { useState } from 'react';
//context
import { useTodoContext } from '../../context/TodoContext';
//css
import './TodoInput.css'

const TodoInput = () => {
  const [todoText, setTodoText] = useState('');
  const { dispatch } = useTodoContext();

  const handleAddTodo = () => {
    if (todoText.length === 0) {
     alert('Please type something to proceed.')
    }
    if (todoText.trim()) {
      dispatch({ type: 'ADD_TODO', text: todoText });
      setTodoText('');
    }
  };

  return (
    <div className='todo-input-container'>
      <input
        type="text"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        placeholder="Type something"
        className='todo-input-box'
      />
      <div onClick={handleAddTodo} className="add-todo-btn">Add Task</div>
    </div>
  );
};

export default TodoInput;
