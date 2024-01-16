import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleSaveEdit = () => {
    if (editedTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = editedTask;
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditedTask("");
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedTask("");
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Task Master</h1>
      </div>
      <div className="input-item">
        <input
          type="text"
          placeholder="add item..."
          value={newTask}
          onChange={handleInputChange}
        />
      </div>
      <div className="button-add">
        <button onClick={handleAddTask}>ADD</button>
      </div>
      <div className="items">
        {tasks.map((task, index) => (
          <div className="lists" key={index}>
            <div>
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
              ) : (
                <p>{task}</p>
              )}
            </div>
            <div className="operations">
              {editingIndex === index ? (
                <>
                  <button onClick={handleSaveEdit}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleDeleteTask(index)}>Delete</button>
                  <button onClick={() => handleEditTask(index)}>Edit</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
