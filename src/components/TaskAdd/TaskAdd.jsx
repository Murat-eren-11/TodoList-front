import { useState } from "react";
import "./TaskAdd.css";

const TaskAdd = (props) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setNewTask(value);
    props.onSearch(value);
  };
  return (
    <form
      className="newtaskform"
      onSubmit={(e) => {
        e.preventDefault();
        if (newTask.trim() !== "") {
          props.onAdd(newTask);
          setNewTask("");
        }
      }}
    >
      <input
        className="newtask"
        type="text"
        value={newTask}
        placeholder="new task"
        onChange={handleInputChange}
      />
      <input className="addtask" type="submit" value="Add task" />
    </form>
  );
};
export default TaskAdd;
