import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          setReminder={onReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
