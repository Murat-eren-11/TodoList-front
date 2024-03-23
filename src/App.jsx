import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faList, faRectangleList } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Task from "./components/Task/Task";
import TaskAdd from "./components/TaskAdd/TaskAdd";

library.add(faList, faRectangleList);

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Header />
      <TaskAdd
        onAdd={(newTask) => {
          setTasks((prevTasks) => [...prevTasks, newTask]);
        }}
      />
      <Task tasks={tasks} />
      <Footer />
    </>
  );
};

export default App;
