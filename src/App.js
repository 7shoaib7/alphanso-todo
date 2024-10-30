
//components
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
//context
import { useTodoContext } from "./context/TodoContext";



function App() {
  const { state,dispatch} = useTodoContext();

  const handleFilterChange = (filter) => {
    dispatch({ type: 'SET_FILTER', filter });
  };


  return (
    <div className="App">
      <div className="top-header">
        <h1>Today</h1>
        <TodoSearch />
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
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default App;
