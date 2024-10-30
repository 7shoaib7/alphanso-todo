
import { useState } from "react";
//components
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
//context
import { useTodoContext } from "./context/TodoContext";
//hooks
import useDebounce from "./hooks/useDebounce";




function App() {
  const { state,dispatch} = useTodoContext();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleFilterChange = (filter) => {
    dispatch({ type: 'SET_FILTER', filter });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };



  return (
    <div className="App">
      <div className="top-header">
        <h1>Today</h1>
        <TodoSearch handleSearchChange={handleSearchChange}/>
        <div className="todo-filter-container">
        {['all', 'completed', 'incomplete'].map(filter => (
          <div
            key={filter}
            style={{
              backgroundColor: state.filter === filter ? 'green' : '#f0f0f0',
              color: state.filter === filter ? '#fff' : '#000',
            }}
            onClick={() => handleFilterChange(filter)}
            className="todo-filter"
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </div>
        ))}
        </div>
      </div>
      <TodoList searchTerm={debouncedSearchTerm}/>
      <TodoInput />
    </div>
  );
}

export default App;
