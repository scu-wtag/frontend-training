import React from "react";
import styles from "./Item.module.css";

function Item({ item, setTodos }) {
  const [editing, setEditing] = React.useState(false);
  const inputRef = React.useRef(null);

  function updateTodoById(id, updater) {
    setTodos(prev => {
      return prev.map(todo => {
        if (todo.id !== id) {
          return todo
        };
        
        return updater(todo);
      });
    });
  }

  function toggleComplete() {
    updateTodoById(item.id, todo => ({
      ...todo,
      is_completed: !todo.is_completed,
    }));
  }

  function deleteTodo() {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== item.id);
    });
  }

  function startEdit() {
    setEditing(true);
  }

  function finishEdit() {
    setEditing(false);
  }

  function handleEditChange(e) {
    const nextTitle = e.target.value;
    updateTodoById(item.id, todo => ({
      ...todo,
      title: nextTitle,
    }));
  }

  function submitEdit(e) {
    e.preventDefault();
    finishEdit();
  }

  React.useEffect(() => {
    if (!editing) return;

    const el = inputRef.current;
    if (!el) return;

    el.focus();
    const len = el.value.length;
    el.setSelectionRange(len, len);
  }, [editing]);

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
            <p
              className={`${styles.text} ${item.is_completed ? styles.completed : ""
                }`}
            >
              {item.title}
            </p>
          </button>

          <div className={styles.right}>
            <button
              className={styles.iconButton}
              onClick={startEdit}
              aria-label="Edit"
            >
              Edit
            </button>
            <button
              className={styles.iconButton}
              onClick={deleteTodo}
              aria-label="Delete"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default Item;
