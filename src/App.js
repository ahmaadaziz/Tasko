import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "task 1",
      time: "thursday at 12:00am",
      reminder: true,
    },
    {
      id: 2,
      title: "task 2",
      time: "friday at 12:00am",
      reminder: true,
    },
    {
      id: 3,
      title: "task 3",
      time: "saturday at 12:00am",
      reminder: false,
    },
  ]);

  const onAdd = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const setReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={onAdd} />}
      <Tasks tasks={tasks} onDelete={onDelete} onReminder={setReminder} />
    </div>
  );
}

export default App;
