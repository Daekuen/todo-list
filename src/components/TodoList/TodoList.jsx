import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: '송년회', status: 'active' },
    { id: 2, title: 'react 공부', status: 'active' },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
