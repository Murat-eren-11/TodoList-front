import "./Task.css";

const Task = (props) => {
  return (
    <div className="task-container">
      {props.tasks &&
        props.tasks.map((task, index) => (
          <p className="tasks" key={index}>
            {task}
          </p>
        ))}
    </div>
  );
};

export default Task;
