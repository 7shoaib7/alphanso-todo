import React from 'react';
import './TodoSearch.css';

const TodoSearch = ({handleSearchChange}) => {
    return (
        <input
           className='search-input'
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
        />
    )
}

export default TodoSearch