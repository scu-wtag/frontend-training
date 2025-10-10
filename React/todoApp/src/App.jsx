import React from "react";
import Header from "./components/Header.jsx";
import TODOHero from "./components/TodoHero.jsx";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";
import styles from "./App.module.css";

export default function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completed = todos.filter(t => t.is_completed).length;

  return (
    <div className={styles.wrapper}>
      <Header />
      <TODOHero todos_completed={completed} total_todos={todos.length} />
      <Form setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
