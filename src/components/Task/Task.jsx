import "./Task.css";

const Task = (props) => {
  return (
    <div className="task-container">
      {props.tasks &&
        props.tasks.map((task, index) => <p key={index}>{task}</p>)}
    </div>
  );
};

export default Task;
