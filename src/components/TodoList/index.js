import React from 'react';
import { useTodoContext } from '../../context/TodoContext';
import TodoItem from '../TodoItem';

const TodoList = ({ searchTerm }) => {
    const { state } = useTodoContext();

    const filteredTodos = state.todos.filter(todo => {
        const matchesFilter =
            state.filter === 'all' ||
            (state.filter === 'completed' && todo.completed) ||
            (state.filter === 'incomplete' && !todo.completed);
        const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div style={{
            margin: "1rem 0"
        }}>
            {
                filteredTodos.length > 0 ? (
                    filteredTodos.map(todo => (
                        <TodoItem key={todo.id} {...todo} />
                    ))
                ) : (
                    <p>No todos found.</p>
                )}
        </div>
    );
};

export default TodoList;
