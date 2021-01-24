import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Footer from "./components/Footer";
//Components
import FormTask from "./components/FormTask";
import TasksList from "./components/TasksList";

function App() {
  //Arreglo de Tareas
  const [tasks, setTasks] = useState([]);

  // funcion que toma las tareas actuales y agregue la nueva
  // Tambien podria pasarle al input form el setTasks
  const newTasks = task => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="todo-app">
      <Header />
      <div className="ed-grid s-grid-1 s-center">
        <FormTask newTasks={newTasks} />
        <TasksList tasks={tasks} setTasks={setTasks} />
      </div>
      <Footer />
    </div>
  );
}

FormTask.prototype = {
  newTasks: PropTypes.func.isRequired
};

TasksList.prototype = {
  tasks: PropTypes.object.isRequired,
  setTask: PropTypes.func.isRequired
};

export default App;
