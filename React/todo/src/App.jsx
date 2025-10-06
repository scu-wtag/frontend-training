import React from "react";
import Header from "./components/Header.jsx";
import TODOHero from "./components/TodoHero.jsx";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";

export default function App() {
  const [todos, setTodos] = React.useState([]);

  // LocalStorage -> State (beim Start)
  React.useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  // State -> LocalStorage (bei Änderungen)
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completed = todos.filter(t => t.is_completed).length;

  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={completed} total_todos={todos.length} />
      <Form setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}