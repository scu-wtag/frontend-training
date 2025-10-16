import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item.jsx";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.items);

  if (!todos.length) {
    return (
      <div className={styles.empty}>
        <p>Seems lonely in here, what are you up to?</p>
      </div>
    );
  }

  return (
    <ol className={styles.list}>
      {todos.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ol>
  );
}