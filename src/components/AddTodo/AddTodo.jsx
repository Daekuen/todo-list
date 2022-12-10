import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('');
  const inputRef = useRef();
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    onAdd({ id: uuidv4(), title, status: 'active' });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        id="title"
        placeholder="Add Todo"
        value={title}
        ref={inputRef}
        onChange={handleChange}
        className={styles.input}
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
}
