import React from "react";
import Header from "./components/Header.jsx";
import TodoHero from "./components/TodoHero.jsx";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <TodoHero />

      <Form />

      <TodoList />
    </div>
  );
}