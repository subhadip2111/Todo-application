// src/App.js
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todoSlice';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(
        addTodo({
          id: Date.now(),
          text: input.trim(),
          completed: false,
        })
      );
      setInput('');
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <Header />
      <div className="p-4">
        <input
          type="text"
          placeholder="Enter your todo"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button onClick={handleAddTodo} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
          Add Todo
        </button>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
