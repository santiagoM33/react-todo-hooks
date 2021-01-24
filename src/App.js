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
  
  const newTasks = task => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="todo-app">
      <Header />
      <main className="ed-grid s-grid-1 s-center">
        <FormTask newTasks={newTasks} />
        <TasksList tasks={tasks} setTasks={setTasks} />
      </main>
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
