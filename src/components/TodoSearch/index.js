import React from 'react';
// import serachIcon from "../../assets/search.png"
import './TodoSearch.css';

const TodoSearch = ({ handleSearchChange }) => {
    return (
        <div className="todo-search-box">
            {/* <img src={serachIcon} alt="search-icon" className="search-icon" /> */}
            <input
                className='search-input'
                type="text"
                placeholder="Search"
                onChange={handleSearchChange}
            />

        </div>
    )
}

export default TodoSearch