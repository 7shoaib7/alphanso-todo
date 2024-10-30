import React from 'react';
import { useTodoContext } from '../../context/TodoContext';
import TodoItem from '../TodoItem';

const TodoList = () => {
  const { state } = useTodoContext();

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'completed') return todo.completed;
    if (state.filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div style={{
        margin:"1rem 0"
    }}>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
