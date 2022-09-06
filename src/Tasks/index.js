import "./style.css";

const Tasks = ({tasks, hideDoneTask}) => (
  <ul className="list">
    {tasks.map(task => (
      <li
      className={`list__item ${task.done && hideDoneTask ? "list__task--hidden" : ""}`}
      >
        <button className=" list__button list__button--done">
                     {task.done ? "✓" : ""}
                    </button>
                    <span className={`list__task ${task.done ? " list__task--done" : ""}`}>
                     {task.content} 
                    </span>            
                    <button className="list__button list__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;