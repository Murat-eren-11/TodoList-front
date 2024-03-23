import { useState } from "react";
import "./TaskAdd.css";

const TaskAdd = (props) => {
  const [newTask, setNewTask] = useState("");

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
        onChange={(e) => setNewTask(e.target.value)}
      />
      <input className="addtask" type="submit" value="Add task" />
    </form>
  );
};
export default TaskAdd;
