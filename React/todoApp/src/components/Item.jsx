import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTitle } from "../features/todos/todosSlice.js";
import styles from "./Item.module.css";

export default function Item({ item }) {
  const dispatch = useDispatch();

  const [editing, setEditing] = React.useState(false);

  const inputRef = React.useRef(null);

  function toggleComplete() {
    dispatch(toggleTodo({ id: item.id }));
  }

  function remove() {
    dispatch(deleteTodo({ id: item.id }));
  }

  function startEdit() {
    setEditing(true);
  }

  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();

      const len = inputRef.current.value.length;

      inputRef.current.setSelectionRange(len, len);
    }
  }, [editing]);

  function handleEditChange(e) {
    const text = e.target.value;

    dispatch(updateTitle({ id: item.id, title: text }));
  }

  function finishEdit() {
    setEditing(false);
  }

  function submitEdit(e) {
    e.preventDefault();

    finishEdit();
  }

  return (
    <li className={styles.item} id={item.id}>
      {editing ? (
        <form className={styles.editForm} onSubmit={submitEdit}>
          <label htmlFor={`edit-${item.id}`}>
            <input
              ref={inputRef}
              id={`edit-${item.id}`}
              defaultValue={item.title}
              onChange={handleEditChange}
              onBlur={finishEdit}
              className={styles.editInput}
            />
          </label>
        </form>
      ) : (
        <>
          <button className={styles.left} onClick={toggleComplete}>
            <p className={`${styles.text} ${item.isCompleted ? styles.completed : ""}`}>
              {item.title}
            </p>
          </button>

          <div className={styles.right}>
            <button className={styles.iconButton} onClick={startEdit} aria-label="Edit">
              Edit
            </button>

            <button className={styles.iconButton} onClick={remove} aria-label="Delete">
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}