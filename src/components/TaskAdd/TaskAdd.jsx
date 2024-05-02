import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const TaskAdd = (props) => {
  // je créé un state pour les nouvelles tâches
  const [newTask, setNewTask] = useState("");
  //un state pour la recherche
  const [searchTerm, setSearchTerm] = useState("");
  //state pour la taille de la fenêtre
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //une fonction qui prends en value ce que j'écris
  const handleInputChange = (e) => {
    const { value } = e.target;
    setNewTask(value);
  };

  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  //fonction pour suivre la taille de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Une fonction qui va enlevé en premier vérifié que ce n'est pas un mot vide puis qui va ajouté la nouvelle tâche
  const handleAddTask = async () => {
    if (newTask.trim() !== "") {
      try {
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
      className="flex flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTask();
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <TextField
          id="filled-basic"
          label="Ajoutez une tâche"
          variant="filled"
          onChange={handleInputChange}
          value={newTask}
          className="dark:bg-white dark:text-white rounded-lg"
        />
      </ThemeProvider>
      <Button type="submit" variant="outlined" className="rounded-lg">
        {windowWidth <= 900 ? "+" : "Ajoutez une tâche"}
      </Button>
    </form>
  );
};

export default TaskAdd;
