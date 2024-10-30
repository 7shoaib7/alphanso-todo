
//components
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";



function App() {
  return (
    <div className="App">
      <div className="top-header">
        <h1>Today</h1>
        <TodoSearch />
        <div className="todo-filter-container">
          <div className="todo-filter">
            All
          </div>
          <div className="todo-filter">
            Completed
          </div>
          <div className="todo-filter">
            Incomplete
          </div>
        </div>
      </div>
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default App;
