import "./Task.css";

const Task = (props) => {
  return (
    <div className="task-container">
      <div className="tasks">
        {props.tasks &&
          props.tasks.map((task, index) => (
            <p className="task" key={index}>
              {task}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Task;
