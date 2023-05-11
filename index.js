const taskList = [];

//Add a task to the end of the task list.
const addTask = () => {
  const taskInput = document.getElementById("new-task-input");
  const newTask = taskInput.value.trim();
  if (newTask !== "") {
    taskList.push(newTask);
    taskInput.value = "";
    displayTaskList();
  }
};

//Remove a task from the beginning of the task list.
const removeFirstTask = () => {
  if (taskList.length > 0) {
    taskList.shift();
    displayTaskList();
  }
};

//Remove a task from the end of the task list.
const removeLastTask = () => {
  if (taskList.length > 0) {
    taskList.pop();
    displayTaskList();
  }
};

//Remove a task from a specific position in the task list.
const removeTask = () => {
  const taskInput = document.getElementById("remove-task-input");
  const taskIndex = Number(taskInput.value) - 1;
  if (taskIndex >= 0 && taskIndex < taskList.length) {
    taskList.splice(taskIndex, 1);
    taskInput.value = "";
    displayTaskList();
  }
};

//Display the current task list.
const displayTaskList = () => {
  const taskListElement = document.getElementById("task-list");
  taskListElement.innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    const taskItem = document.createElement("li");
    taskItem.innerText = `${i + 1}. ${taskList[i]}`;
    taskListElement.appendChild(taskItem);
  }
};

document.getElementById("add-task-btn").addEventListener("click", addTask);
document.getElementById("remove-task-btn").addEventListener("click", removeTask);
document.getElementById("remove-first-task-btn").addEventListener("click", removeFirstTask);
document.getElementById("remove-last-task-btn").addEventListener("click", removeLastTask);
