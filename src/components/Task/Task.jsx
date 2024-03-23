import { useState } from "react";
import "./Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedTasks = [...props.tasks].sort((a, b) => {
    if (!a.checked && b.checked) return -1;
    if (a.checked && !b.checked) return 1;
    return 0;
  });

  const handleCheckboxChange = (taskText) => {
    const updatedTasks = props.tasks.map((task) => {
      if (task.text === taskText) {
        return {
          ...task,
          checked: !task.checked,
        };
      }
      return task;
    });

    props.onDelete(updatedTasks);
  };

  const handleDeleteTask = (taskText) => {
    const newTasks = props.tasks.filter((task) => task.text !== taskText);
    props.onDelete(newTasks);
  };

  return (
    <div className="task-container">
      {sortedTasks.map((task, index) => (
        <div className="tasks" key={index}>
          <input
            className="check"
            type="checkbox"
            checked={task.checked}
            onChange={() => handleCheckboxChange(task.text)}
          />
          <p className={task.checked ? "task checked" : "task"}>{task.text}</p>
          <FontAwesomeIcon
            className="trash"
            icon="trash-can"
            onClick={() => handleDeleteTask(task.text)}
          />
        </div>
      ))}
    </div>
  );
};

export default Task;
