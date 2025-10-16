import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const title = action.payload.title;

      if (!title || title.trim().length === 0) {
        return;
      }

      state.items.push({
        id: nanoid(),
        title,
        isCompleted: false,
      });
    },

    toggleTodo(state, action) {
      const id = action.payload.id;

      const todo = state.items.find((t) => t.id === id);

      if (!todo) {
        return;
      }

      todo.isCompleted = !todo.isCompleted;
    },

    updateTitle(state, action) {
      const { id, title } = action.payload;

      const todo = state.items.find((t) => t.id === id);

      if (!todo) {
        return;
      }

      todo.title = title;
    },

    deleteTodo(state, action) {
      const id = action.payload.id;

      state.items = state.items.filter((todo) => {
        if (todo.id !== id) {
          return true;
        }

        return false;
      });
    },
  },
});

export const { addTodo, toggleTodo, updateTitle, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;