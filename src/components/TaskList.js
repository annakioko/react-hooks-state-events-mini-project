import React from "react";
import Task from "./Task";

function TaskList({ tasks, topLevelDelete }) {

  function generateUniqueId(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
  }



  function handleDelete(textToDelete) {
    const taskListFilter = tasks.filter((task) => {
      if (task.text === textToDelete) return false;
      else return true;
    });
    topLevelDelete(taskListFilter);
  }

  const taskList = tasks.map((task) => {
    return (
      <Task
        key={generateUniqueId(1, 1000)}
        text={task.text}
        category={task.category}
        handleDelete={handleDelete}
      />
    );
  });

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
