// src/components/TodoList.js
//import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, toggleComplete, removeTodo } from '../features/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={() => dispatch(toggleComplete(todo.id))}
          removeTodo={() => dispatch(removeTodo(todo.id))}
        />
      ))}
    </div>
  );
};

export default TodoList;
