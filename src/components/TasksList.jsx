import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

const Tasks = ({ tasks, setTasks }) => {
  //console.log(tasks)
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul style={{ listStyle: "none" }}>
        {tasks.map(task => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </ul>
    </div>
  );
};

Task.proptypes = {
  key: PropTypes.string.isRequired,
  task: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired
};

export default Tasks;
