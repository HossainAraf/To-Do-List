/**
 * @jest-environment jsdom
 */

import Operations from './int.js';

const myOp = new Operations();

document.body.innerHTML = `
<section class="card">
<div class="head">
    <p>To Do List</p>
    <i class="fa-solid fa-rotate rotate"></i>
</div>
<hr>
<div class="addData">
    <input id="task" type="text" placeholder="Add to your List...." required>
    <button><i id="add-button" class="fa-solid fa-turn-down turnLeft"></i> </button>
</div>
<hr>
<ul id="lists" class="lists">
        
</ul>
<button id="btn-clearAll" class="clear-btn" type="button">Clear all completed</button>
</section>`;

describe('AddList', () => {
  test('Test  Add new task "First task" to LocalStore', () => {
    const firstTask = 'First Task';
    myOp.addRow(firstTask, false, 1);
    expect(myOp.todoDetails[0].title).toBe(firstTask);
  });

  test('Test  Add new task "Second task" to LocalStore', () => {
    const secondTask = 'Second Task';
    myOp.addRow(secondTask, false, 2);
    expect(myOp.todoDetails[1].title).toBe(secondTask);
  });
});

describe('Delete a task', () => {
   test('Detele "First Task" using index', () => {
    myOp.deleteRow(1, myList);
    expect(myOp.todoDetails).toHaveLength(1);
    expect(myOp.todoDetails[0].description).toBe('Description 1');
    expect(myOp.todoDetails[0].completed).toBe(false);
    expect(myOp.todoDetails[0].index).toBe(1)
  });
});