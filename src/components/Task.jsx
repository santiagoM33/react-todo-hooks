import React from "react";

const Task = ({ task, tasks, setTasks }) => {
  const handleCheck = () => {
    setTasks(
      tasks.map(item =>
        item.id === task.id
          ? {
              ...item,
              completed: !item.completed
            }
          : item
      )
    );
  };

  const handleDelete = () => {
    setTasks(tasks.filter(el => el.id !== task.id));
  };

  return (
    <div
      className={`ed-container s-left ${
        task.completed ? "line-through" : null
      }`}
    >
      <li
        className="ed-item s-70"
        style={{
          color: "blue",
          textDecoration: task.completed ? "line-through" : null
        }}
      >
        <h4>{task.task}</h4>
        <p>{task.description}</p>
      </li>
      <input className="ed-item s-10" type="checkbox" onClick={handleCheck} />
      <button className="ed-item s-10" onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

export default Task;
