import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

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
    <div className="flex flex-col">
      {sortedTasks.map((task, index) => (
        <div
          className={`${
            index % 2 === 0
              ? "bg-gray-200 flex flex-row gap-4 dark:text-black"
              : "flex flex-row gap-4 dark:text-white"
          }`}
          key={index}
        >
          <Checkbox
            type="checkbox"
            checked={task.checked}
            onChange={() => handleCheckboxChange(task.text)}
          />
          <p className={task.checked ? "line-through text-lg" : "text-lg"}>
            {task.text}
          </p>
          <DeleteIcon
            className="trash"
            onClick={() => handleDeleteTask(task.text)}
          />
        </div>
      ))}
    </div>
  );
};

export default Task;
