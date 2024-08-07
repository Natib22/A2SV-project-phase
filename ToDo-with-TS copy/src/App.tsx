import React, { useState } from "react";
import Task from "./components/Task";
import { FaPlus } from "react-icons/fa";

interface task {
  name: string;
  description: string;
}
const App = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState<task[]>([]);

  // Add a new task
  const addTask = () => {
    if (taskName && taskDescription) {
      const newTask: task = {
        name: taskName,
        description: taskDescription,
      };
      setTasks([...tasks, newTask]); // Add new task to the list
      setTaskName(""); // Clear input fields
      setTaskDescription("");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-8">MY TO DO APP</h1>

      <div className="flex justify-evenly mt-16 p-3 bg-gray-500 bg-opacity-70 w-600 mx-auto h-16 rounded-tl-lg rounded-tr-lg">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border-2 border-orange-400 rounded-lg p-2 placeholder-orange-400 placeholder-opacity-70 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="border-2 border-orange-400 rounded-lg p-2 placeholder-orange-400 placeholder-opacity-70 focus:outline-none"
        />

        <button
          onClick={addTask}
          className="bg-orange-400 rounded-lg w-12 flex justify-center items-center text-white
        "
        >
          <FaPlus />
        </button>
      </div>
      <div className=" bg-gray-500 bg-opacity-70 w-600 mx-auto mt-2">
        {tasks.map((task) => (
          <Task name={task.name} description={task.description} />
        ))}
      </div>
    </>
  );
};

export default App;
