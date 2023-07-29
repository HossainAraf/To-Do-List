import './styles/style.css';
import AddList from './modules/todo.js';
import Operations from './modules/int.js';

const myOp = new Operations();
const myList = new AddList();

window.addEventListener('DOMContentLoaded', myList.displayList.bind(myList));

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', () => {
  const task = document.querySelector('#task').value.trim();
  const completed = false;
  const index = myOp.todoDetails.length + 1;
  if (task) {
    myOp.addRow(task, completed, index);
    myList.displayList();
    document.querySelector('#task').value = '';
  }
});