// eslint-disable-next-line import/no-cycle
import renderTodoList from './display.js';

export class Task {
  constructor(completed, description, index) {
    this.completed = completed;
    this.description = description;
    this.index = index;
  }
}

export const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

export function addTask() {
  const formInputValue = document.getElementById('formInput');
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = formInputValue.value.trim();
    if (inputValue === '') {
      return;
    }
    const newTask = new Task(false, inputValue, tasks.length + 1);
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('newTask', JSON.stringify(newTask));
    formInputValue.value = '';
    renderTodoList();
  });
}

function handleTaskDescriptionEdit(event) {
  const descriptionElement = event.target;
  if (descriptionElement.classList.contains('description')) {
    const listItem = descriptionElement.closest('.todo-item');
    if (listItem) {
      const taskIndex = parseInt(listItem.id, 10);
      const newDescription = descriptionElement.textContent;

      tasks[taskIndex].description = newDescription;
    }
  }
}

function updateIndex() {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

function handleTrashIconClick(event) {
  if (event.target.classList.contains('fa-trash')) {
    const listItem = event.target.closest('.todo-item');
    if (listItem) {
      const taskIndex = parseInt(listItem.id, 10);
      tasks.splice(taskIndex - 1, 1);
      updateIndex(); // Update task indexes after deletion
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTodoList();
    }
  }
}

export function removeTask() {
  const todoListContainer = document.getElementById('todo');

  // Remove previous event listener before adding new ones
  todoListContainer.removeEventListener('click', handleTrashIconClick);

  // Add event listener using event delegation
  todoListContainer.addEventListener('click', handleTrashIconClick);
}

export function editTask(index, newDescription) {
  tasks[index].description = newDescription;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTodoList();
}

export function listenForEdit() {
  const todoListContainer = document.getElementById('todo');
  todoListContainer.addEventListener('input', handleTaskDescriptionEdit);
}