import AddList from './todo.js';
import './styles/style.css';

const myList = new AddList();
const myCrud = new CrudOperations();

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