import './styles/style.css';

const toDoList = document.querySelector('#to-do-list');

const listTask = [
  {
    index: 0,
    description: 'desc-1',
    completed: true,
  },
  {
    index: 1,
    description: 'desc-2',
    completed: false,
  },
  {
    index: 2,
    description: 'desc-3',
    completed: true,
  },
];

function renderToDoList() {
  listTask.forEach((task, index) => {
    toDoList.innerHTML = `
    <div id='${index}' class='rendered-item'>
    <svg class='${task.completed ? 'task-completed' : 'task-incomplete'}' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>    
    <h4 id='rendered-text'>${task.description}</h4>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
    `;
  });
}

window.addEventListener('load', renderToDoList);