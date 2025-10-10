import React from "react";
import styles from "./Form.module.css";

export default function Form({ setTodos }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const value = e.target.todo.value.trim();
    if (!value) return;

    setTodos(prev => [
      ...prev,
      { id: crypto.randomUUID(), title: value, is_completed: false }
    ]);

    e.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="todo">
        <input
          className={styles.input}
          name="todo"
          id="todo"
          placeholder="Write your next task"
        />
      </label>
      <button className={styles.button} type="submit">Add</button>
    </form>
  );
}
