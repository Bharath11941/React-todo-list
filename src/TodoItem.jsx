export function TodoItem({ title, id, completed, toggleTodo, deleteList }) {
  return (
    <li>
      <label style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        <input
          type="checkbox"
          onChange={(e) => toggleTodo(id, e.target.checked)}
          checked={completed}
        />
        {title}
      </label>
      <button
        onClick={() => {
          deleteList(id);
        }}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
