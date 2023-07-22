import './styles/style.css';
import { addTask, removeTask } from './add-remove.js';
import renderTodoList from './display.js';

document.addEventListener('DOMContentLoaded', () => {
  addTask();
  renderTodoList();
  removeTask();
});