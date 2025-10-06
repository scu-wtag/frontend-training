import React from "react";

function Item({ item, setTodos }) {
  const [editing, setEditing] = React.useState(false);
  const inputRef = React.useRef(null);

  const toggleComplete = () => {
    setTodos(prev =>
      prev.map(t => (t.id === item.id ? { ...t, is_completed: !t.is_completed } : t))
    );
  };

  const deleteTodo = () => {
    setTodos(prev => prev.filter(t => t.id !== item.id));
  };

  const startEdit = () => {
    setEditing(true);
  };

  // Fokus ins Eingabefeld, Cursor ans Ende
  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      const len = inputRef.current.value.length;
      inputRef.current.setSelectionRange(len, len);
    }
  }, [editing]);

  const handleEditChange = (e) => {
    const text = e.target.value;
    setTodos(prev =>
      prev.map(t => (t.id === item.id ? { ...t, title: text } : t))
    );
  };

  const finishEdit = () => setEditing(false);

  const submitEdit = (e) => {
    e.preventDefault();
    finishEdit();
  };

  return (
    <li className="todo_item" id={item.id}>
      {editing ? (
        <form className="edit-form" onSubmit={submitEdit}>
          <label htmlFor={`edit-${item.id}`}>
            <input
              ref={inputRef}
              id={`edit-${item.id}`}
              defaultValue={item.title}
              onChange={handleEditChange}
              onBlur={finishEdit}
            />
          </label>
        </form>
      ) : (
        <>
          <button className="todo_items_left" onClick={toggleComplete}>
            <p style={item.is_completed ? { textDecoration: "line-through" } : {}}>
              {item.title}
            </p>
          </button>
          <div className="todo_items_right">
            <button onClick={startEdit} aria-label="Edit">Edit</button>
            <button onClick={deleteTodo} aria-label="Delete">Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default function TodoList({ todos, setTodos }) {
  if (!todos.length) {
    return (
      <div className="todo_list">
        <p>Seems lonely in here, what are you up to?</p>
      </div>
    );
  }

  return (
    <ol className="todo_list">
      {todos.map(item => (
        <Item key={item.id} item={item} setTodos={setTodos} />
      ))}
    </ol>
  );
}