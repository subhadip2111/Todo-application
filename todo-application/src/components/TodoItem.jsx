// src/components/TodoItem.jsx
//import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 mb-2 shadow">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
          className="mr-2 form-checkbox h-5 w-5 text-blue-500"
        />
        <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
      </div>
      <button onClick={removeTodo} className="text-red-500">
        Remove
      </button>
    </div>
  );
};

// Add PropTypes validation
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
