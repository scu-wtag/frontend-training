import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";

function loadFromStorage() {
  try {
    const raw = localStorage.getItem("todos_state");

    if (!raw) {
      return undefined;
    }

    return JSON.parse(raw);
  } catch {
    return undefined;
  }
}

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: loadFromStorage(),
});

store.subscribe(() => {
  try {
    const state = store.getState();

    localStorage.setItem(
      "todos_state",
      JSON.stringify({ todos: state.todos })
    );
  } catch {
  }
});