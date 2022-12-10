import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('');
  const handleChange = (e) => setTitle(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    onAdd({ id: uuidv4(), title, status: 'active' });
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Todo</label>
        <input
          type="text"
          id="title"
          placeholder="Add Todo"
          value={title}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
