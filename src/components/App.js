import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [taskList, setTaskList] = useState([...TASKS]);
  const [taskCategory, setTaskCategory] = useState("Code");
  const [itemText, setItemText] = useState("");

  const [categories, setCategories] = useState([...CATEGORIES]);

  const [selectedCategory, setSelectedCategory] = useState("All");

 
  function handleNewFormChangeCat(event) {
    setTaskCategory(event.target.value);
  }

 
  function handleItemText(event) {
    setItemText(event.target.value);
  }

  
  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      key: taskList.size,
      text: itemText,
      category: taskCategory,
    };
    setTaskList([...taskList, newTask]);
    setItemText("");
    setTaskCategory("Code");
  }

 
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.textContent);
    event.target.className = "selected";
  }

  
  function topLevelDelete(taskToFilter) {
    
    setTaskList([...taskToFilter]);
  }

  
  const tasksToDisplay = taskList.filter((task) => {
    if (selectedCategory === "All") return true;
    else return task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
        categories={categories}
        handleCategoryChange={handleCategoryChange}
      />

      <NewTaskForm
        categories={categories}
        itemText={itemText}
        handleItemText={handleItemText}
        handleNewFormChangeCat={handleNewFormChangeCat}
        onTaskFormSubmit={handleSubmit}
      />

      <TaskList tasks={tasksToDisplay} topLevelDelete={topLevelDelete} />
    </div>
  );
}

export default App;
