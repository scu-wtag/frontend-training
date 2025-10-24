import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import { toast } from "react-hot-toast";

function loadFromStorage() {
  try {
    const raw = localStorage.getItem("todos_state");

    if (!raw) {
      return undefined;
    }

    return JSON.parse(raw);
  } catch (error) {
    toast.error("Failed to load saved todos");
    throw new Error("Error loading todos from localStorage: " + error.message);
  }
}

let preloadedState;

try {
  preloadedState = loadFromStorage();
} catch (error) {
  console.error(error);
  preloadedState = undefined;
}

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem(
      "todos_state",
      JSON.stringify({ todos: state.todos })
    );
  } catch (error) {
    toast.error("Failed to save todos");
    console.error("Error saving todos to localStorage:", error);
  }
});