import './styles/style.css';
import AddList from './modules/todo.js';
const myList = new AddList();

window.addEventListener('DOMContentLoaded', myList.displayList.bind(myList));

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
  const task = document.getElementById('task').value.trim();
  const completed = false;
  const index = myCrud.todoDetails.length + 1;
  if (task) {
    myCrud.addRow(task, completed, index);
    myList.displayList();
    document.getElementById('task').value = '';
  }
});