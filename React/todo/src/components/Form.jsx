export default function Form({ setTodos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.todo.value.trim();
    if (!value) return;

    setTodos(prev => [
      ...prev,
      { id: crypto.randomUUID(), title: value, is_completed: false }
    ]);

    e.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input name="todo" id="todo" placeholder="Write your next task" />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}