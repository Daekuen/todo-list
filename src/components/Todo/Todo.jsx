import React, { useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { title, status } = todo;

  const handleDelete = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className={styles.title}>
        {title}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <BsTrashFill />
        </button>
      </span>
    </li>
  );
}
