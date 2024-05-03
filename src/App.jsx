import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faList,
  faRectangleList,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Task from "./components/Task/Task";
import TaskAdd from "./components/TaskAdd/TaskAdd";

library.add(faList, faRectangleList, faTrashCan);

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col items-center h-screen justify-around bg-white dark:bg-black text-black dark:text-white">
        <TaskAdd
          onAdd={(newTaskText) => {
            setTasks((prevTasks) => [
              ...prevTasks,
              { text: newTaskText, checked: false },
            ]);
          }}
          onSearch={handleSearch}
        />
        <Task
          tasks={filteredTasks}
          onDelete={(newTasks) => {
            setTasks(newTasks);
          }}
          onCheckboxChange={(taskText) => {
            handleCheckboxChange(taskText);
          }}
          onDeleteTask={(taskText) => {
            handleDeleteTask(taskText);
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
