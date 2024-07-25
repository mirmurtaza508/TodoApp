import React, { useState } from "react";
import { TaskItems } from "./TaskItems";

const Home = () => {
  const [tasksList, setTasksList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [rowId, setRowId] = useState("");
  console.log(rowId);
  function handleSubmit(e) {
    e.preventDefault();
    const task = {
      id: crypto.randomUUID(),
      value: newTask,
    };
    if (task.value) {
      if (isEditing) {
        setTasksList((prevState) =>
          prevState.map((task) =>
            task.id === rowId ? { ...task, value: newTask } : task
          )
        );
        setRowId("");
        setIsEditing(false);
        setNewTask("");
      } else {
        setTasksList((prevState) => [...prevState, task]);
        setNewTask("");
      }
    }
  }
  return (
    <div className="min-h-screen max-h-auto bg-blue-500 flex justify-center">
      <div className="max-w-107 min-w-fit h-fit bg-white p-6 rounded-md my-8">
        <div className="h-12  flex gap-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Add Task"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            className="border-2 border-blue-600 rounded-lg w-full px-4"
          />
          <button
            onClick={handleSubmit}
            className="py-2 px-6 border bg-blue-500 text-white font-bold rounded-lg"
          >
            {isEditing ? "Save" : "Add"}
          </button>
        </div>
        {tasksList.map(({ id, value }) => {
          return (
            <TaskItems
              key={id}
              rowId={id}
              text={value}
              tasksList={tasksList}
              setTasksList={setTasksList}
              setIsEditing={setIsEditing}
              setNewTask={setNewTask}
              isEditing={isEditing}
              setRowId={setRowId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
