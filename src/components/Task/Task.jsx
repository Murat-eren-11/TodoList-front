import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Task = (props) => {
  const [tasks, setTasks] = useState([]);
  //Je mets à jour avec les données récupérées
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "https://site--backend-todolist--cbrn9sjblrrw.code.run/"
        );
        setTasks(response.data);
      } catch (error) {
        console.error("pourquoi j'ai pas :", error);
      }
    };

    fetchTasks();
  }, []);

  //je créé une variable pour mon filtrer le tableau quand je coche
  const sortedTasks = [...props.tasks].sort((a, b) => {
    if (!a.checked && b.checked) return -1;
    if (a.checked && !b.checked) return 1;
    return 0;
  });

  //quand j'appelle la fonction, ça va update le tableau et faire descendre ma task
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
  //fonction de suppression, rien de spécial à dire
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
