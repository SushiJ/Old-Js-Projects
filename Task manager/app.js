// Defining UI variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection"); //selecting UL
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// load event listeners

loadEventListeners();

function loadEventListeners() {
  // add task event
  form.addEventListener("submit", addTask);

  //DOM Load event
  document.addEventListener("DOMContentLoaded", getTasks);

  // remove task event
  taskList.addEventListener("click", removeTask);

  // clearing taskx
  clearBtn.addEventListener("click", clearTaskx);

  //filter taskx
  filter.addEventListener("keyup", filterTasks);
}

// getting tasks from local storage if present
function getTasks() {
  let tasks;
  //check if there are tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  // Looping through tasks and showing them in list if present in local storage
  tasks.forEach(function (task) {
    // creating li elements
    const li = document.createElement("li");

    // adding class to li
    li.className = "collection-item";

    // creating node text and appending to Li
    li.appendChild(document.createTextNode(task));

    // creating new link element (cross sign at the end of each task)
    const link = document.createElement("a");

    // add class to ^
    link.className = "delete-item secondary-content";

    // Add icon html
    link.innerHTML = '<i class="fas fa-times"></i>';

    // append the link to li
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li);
  });
}

// add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }
  // creating li elements
  const li = document.createElement("li");

  // adding class to li
  li.className = "collection-item";

  // creating node text and appending to Li
  li.appendChild(document.createTextNode(taskInput.value));

  // creating new link element
  const link = document.createElement("a");

  // add class to ^
  link.className = "delete-item secondary-content";

  // Add icon html
  link.innerHTML = '<i class="fas fa-times"></i>';

  // append the link to li
  li.appendChild(link);

  // append li to ul
  taskList.appendChild(li);

  //store to local storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear inputs
  taskInput.value = "";

  e.preventDefault();
}

// store task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are ya sure bud?"))
      e.target.parentElement.parentElement.remove();

    // remove from local storage
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//clear Taskx
function clearTaskx(e) {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // clear all tasks
  clearTaskFromLocalStorage();
}

// clear all tasks
function clearTaskFromLocalStorage() {
  localStorage.clear();
}

//Filtering
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
