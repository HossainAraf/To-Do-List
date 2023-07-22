import AddList from './todo.js';

const myList = new AddList();
myList.displayList();

function todoCheckbox() {
  const checkboxes = document.querySelectorAll('.edit-text');
  checkboxes.forEach((checkbox) => {
    const index = checkbox.parentNode.querySelector('.editBtn').getAttribute('data-index');
    const editInput = checkbox.parentNode.querySelector('.editBtn');
    const { completed } = myList.todoDetails[index];

    checkbox.checked = completed;
    editInput.classList.toggle('completed', completed);

    checkbox.addEventListener('change', (event) => {
      const isChecked = event.target.checked;
      editInput.classList.toggle('completed', isChecked);
      myList.todoDetails[index].completed = isChecked;
      localStorage.setItem('todoData', JSON.stringify(myList.todoDetails));
    });
  });
}

});

window.addEventListener('DOMContentLoaded', todoCheckbox);