import React, { useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { title, status } = todo;

  const handleDelete = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{title}</label>
      <button onClick={handleDelete}>
        <BsTrashFill />
      </button>
    </li>
  );
}
