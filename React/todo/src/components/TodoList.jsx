import React from "react";
import Item from "./Item.jsx";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, setTodos }) {
  if (!todos.length) {
    return (
      <div className={styles.empty}>
        <p>Seems lonely in here, what are you up to?</p>
      </div>
    );
  }

  return (
    <ol className={styles.list}>
      {todos.map(item => (
        <Item key={item.id} item={item} setTodos={setTodos} />
      ))}
    </ol>
  );
}