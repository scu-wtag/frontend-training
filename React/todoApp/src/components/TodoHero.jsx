import React from "react";
import styles from "./TodoHero.module.css";

export default function TODOHero({ todos_completed, total_todos }) {
  return (
    <section className={styles.section}>
      <div className={styles.meta}>
        <p>Tasks Done:</p>
        <p>Keep it up!</p>
      </div>
      <div className={styles.bubble}>{todos_completed}/{total_todos}</div>
    </section>
  );
}