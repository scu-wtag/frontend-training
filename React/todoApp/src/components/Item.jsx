import React from "react";
import styles from "./Item.module.css";

function Item({ item, setTodos }) {
  const [editing, setEditing] = React.useState(false);
  const inputRef = React.useRef(null);

  const toggleComplete = () => {
    setTodos(prev =>
      prev.map(t => (t.id === item.id ? { ...t, is_completed: !t.is_completed } : t))
    );
  };

  const deleteTodo = () => {
    setTodos(prev => prev.filter(todo => todo.id !== item.id));
  };

  const startEdit = () => setEditing(true);

  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      
      const len = inputRef.current.value.length;
      
      inputRef.current.setSelectionRange(len, len);
    }
  }, [editing]);

  const handleEditChange = (e) => {
    const text = e.target.value;
    
    setTodos(prev => prev.map(t => (t.id === item.id ? { ...t, title: text } : t)));
  };

  const finishEdit = () => setEditing(false);

  const submitEdit = (e) => {
    e.preventDefault();
    finishEdit();
  };

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
            <p className={`${styles.text} ${item.is_completed ? styles.completed : ""}`}>
              {item.title}
            </p>
          </button>
          <div className={styles.right}>
            <button className={styles.iconButton} onClick={startEdit} aria-label="Edit">Edit</button>
            <button className={styles.iconButton} onClick={deleteTodo} aria-label="Delete">Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default Item;
