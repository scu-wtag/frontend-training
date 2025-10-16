import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";
import styles from "./Form.module.css";

export default function Form() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const value = e.target.todo.value.trim();

    if (!value) {
      return;
    }

    dispatch(addTodo({ title: value }));

    e.target.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="todo">
        <input
          className={styles.input}
          name="todo"
          id="todo"
          placeholder="Write your next task"
          autoComplete="off"
        />
      </label>

      <button className={styles.button} type="submit">Add</button>
    </form>
  );
}