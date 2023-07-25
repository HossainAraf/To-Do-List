// Implement a function for adding a new task (add a new element to the array).
// const toDoList = document.querySelector('#to-do-list');


  // Create a new list item when clicking on the "Add" button
  const newElement = () => {
    var li = document.createElement("li");
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    var inputValue = document.querySelector("#myInput").value;
    var renderText = document.createTextNode(inputValue);
    li.appendChild(renderText);
    if (inputValue === '') {
      alert("Pleae write something");
    } else {
      document.querySelector("#myUL").appendChild(li);
    }
    document.querySelector("#myInput").value = "";
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

  document.getElementById('addBtn').addEventListener('click', newElement);

// remove task

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Implement a function for editing task descriptions.
// By default new tasks should have the property completed set to false and the property index set to the value of the new array length (i.e. if you're adding a 5th task to the list, the index of that task should equal to 5).
// Deleting a task should update all remaining items' indexes, so they represent the current list order and are unique(i.e. if you're deleting the first task index 1 from the list, the index of the next task(2) should set to 1)..
// All changes to the To Do List should be saved in local storage.


export * from './addRemove.js';