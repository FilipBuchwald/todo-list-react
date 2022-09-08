import "./style.css";

const Tasks = ({tasks, hideDone}) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`list__item ${task.done && hideDone ? "list__task--hidden" : ""}`}
      >
        <button className=" list__button list__button--done">
          {task.done ? "✓" : ""}
        </button>
        <span className={`list__task ${task.done ? " list__task--done" : ""}`}>
          {task.content}
        </span>
        <button 
        className="list__button list__button--remove"
        // onClick={()}
        >
          🗑
          </button>
      </li>
    ))}
  </ul>
);

export default Tasks;