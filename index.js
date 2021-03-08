const form = document.querySelector(".form");
const input = form.querySelector(".input");
const toDo = document.querySelector(".to-do");

const loadTasks = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

const paintTask = (task) => {
  const div = document.createElement("div");
  div.innerText = task.value;
  div.id = task.id;
  toDo.appendChild(div);
};

const firstLoad = () => {
  const tasks = loadTasks();
  tasks &&
    tasks.length > 0 &&
    tasks.forEach((task) => {
      paintTask(task);
    });
};

const addTask = () => {
  const { value } = input;
  const now = Date.now();
  const obj = { id: now, isDone: false, value };
  const tasks = loadTasks();
  tasks.push(obj);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  paintTask(obj);
};

const onFormSubmit = (e) => {
  e.preventDefault();
  addTask();
  input.value = "";
};

const init = () => {
  firstLoad();
  form.onsubmit = onFormSubmit;
};

init();
