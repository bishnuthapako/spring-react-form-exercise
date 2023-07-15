import './App.css';
import TodoList from "./TodoList"

function App() {
  return (
    <div className="App container bg-info rounded">
      <h2 className='text-start fw-bold text-white pt-3 px-2'>Todo Lists</h2>
      <hr className="mt-1 mb-1"/>
     <TodoList />
    </div>
  );
}

export default App;
