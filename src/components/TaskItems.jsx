import React, { useState } from "react";

export const TaskItems = ({
  text,
  rowId,
  tasksList,
  setTasksList,
  setIsEditing,
  setNewTask,
  setRowId,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleDelete = () => {
    console.log(tasksList);
    setTasksList(tasksList.filter(({ id }) => id !== rowId));
  };
  const handleEdit = () => {
    setIsEditing(true);
    const task = tasksList.find((task) => task.id === rowId);
    setNewTask(task.value);
    setRowId(rowId);
  };
  console.log(text);
  return (
    <div className="tasks mt-8 flex flex-col gap-4">
      <div className="py-2 border-2 border-black px-2 flex justify-between items-center">
        <div>
          <input
            type="checkbox"
            checked={isChecked}
            onClick={() => setIsChecked(isChecked ? false : true)}
          />
        </div>
        <div className="flex-1">
          <h2 className={`${isChecked ? "line-through" : ""} ml-4`}>{text}</h2>
        </div>
        <div>
          <button
            onClick={handleEdit}
            className="bg-blue-700 font-bold rounded-3xl   text-white py-2 px-3 mr-2"
          >
            <i class="fa-solid fa-pen"></i>
          </button>
          <button
            className="bg-blue-700 font-bold rounded-3xl   text-white py-2 px-3"
            onClick={handleDelete}
          >
            <i class="fa-solid fa-trash "></i>
          </button>
        </div>
      </div>
    </div>
  );
};
