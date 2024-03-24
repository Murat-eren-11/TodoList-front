import { useState, useEffect } from "react";
import "./TaskAdd.css";
import axios from "axios";

const TaskAdd = (props) => {
  // je créé un state pour les nouvelles tâches
  const [newTask, setNewTask] = useState("");
  //un state pour la recherche
  const [searchTerm, setSearchTerm] = useState("");
  //une fonction qui prends en value ce que j'écris
  const handleInputChange = (e) => {
    const { value } = e.target;
    setNewTask(value);
  };
  //Une fonction qui va enlevé en premier vérifié que ce n'est pas un mot vide puis qui va ajouté la nouvelle tâche
  const handleAddTask = async () => {
    console.log("je suis dans le handleaddtask");
    if (newTask.trim() !== "") {
      console.log("je suis dans le if");
      try {
        console.log("juste avant le post d'axios");
        //on ajoute la réponse à Axios en mettant le site du back
        const response = await axios.post(
          "https://site--backend-todolist--cbrn9sjblrrw.code.run/newtask",
          {
            task_name: newTask,
          }
        );
        console.log(response.data);
        props.onAdd(newTask);
        setNewTask("");
      } catch (error) {
        console.error("pourquoi ça ajoute pas :", error);
      }
    }
  };
  //J'utilise useEffet pour mettre à jour le terme de recherche avec ce que j'écris, je le filtre ensuite et je le déclenche uniquement quand j'entre un texte
  useEffect(() => {
    setSearchTerm(newTask.trim());
    props.onSearch(newTask.trim());
  }, [newTask]);
  // Je retour le tout afin d'afficher. Le form prends un onSubmit qui va ajouté la Task quand je validerai
  //l'input prendra la value de newTask de mon useState
  //et le dernier input sert à envoyé les données.
  return (
    <form
      className="newtaskform"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTask();
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
