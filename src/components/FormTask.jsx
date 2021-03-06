import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormTask = ({ newTasks }) => {
  // State de Tareas
  const [task, setTask] = useState({
    task: "",
    description: "",
    completed: false
  });

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const { tarea, description } = task;

  const handleSubmit = e => {
    e.preventDefault();

    // Validacion simple

    //Crear la tarea
    newTasks(task);

    //Asignar ID
    task.id = uuidv4();
  };

  return (
    <>
      <h3>Que tienes que hacer hoy?</h3>
      <form
        className="ed-grid s-grid-1 s-80 s-to-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="task"
          placeholder="Add New Task"
          className="todo-input"
          onChange={handleChange}
          value={tarea}
        />
        <textarea
          name="description"
          placeholder="Add Description"
          className="todo-input"
          onChange={handleChange}
          value={description}
        />
        <button className="button s-to-center s-100" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default FormTask;
