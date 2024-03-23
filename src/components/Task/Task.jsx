import "./Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
  const newTasks = [...props.tasks];
  return (
    <div className="task-container">
      {props.tasks &&
        props.tasks.map((task, index) => (
          <div className="tasks" key={index}>
            <p className="task">{task}</p>
            <FontAwesomeIcon
              className="trash"
              icon="trash-can"
              onClick={(index) => {
                newTasks.splice(index, 1);
                props.onDelete(newTasks);
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default Task;
