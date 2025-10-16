import React from "react";
import { useSelector } from "react-redux";
import styles from "./TodoHero.module.css";

export default function TodoHero() {
  const items = useSelector((state) => state.todos.items);

  const totalTodos = items.length;

  const todosCompleted = items.filter((t) => t.isCompleted).length;

  return (
    <section className={styles.section}>
      <div className={styles.meta}>
        <p>Tasks Done:</p>
        <p>Keep it up!</p>
      </div>

      <div className={styles.bubble}>
        {todosCompleted}/{totalTodos}
      </div>
    </section>
  );
}