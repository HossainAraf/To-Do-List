import '../styles/style.css';
import Operations from './int.js';

const myOp = new Operations();

export default class AddList {
  displayList() {
    const reciveData = localStorage.getItem('todoData');
    const row = document.getElementById('lists');
    row.innerHTML = '';
    if (reciveData && JSON.parse(reciveData).length > 0) {
      myOp.todoDetails = JSON.parse(reciveData);

      for (let i = 0; i < myOp.todoDetails.length; i += 1) {
        row.innerHTML += `<li class="removeLine">
                            <div class="rowData" > <input class="edit-text" type="checkbox"  ${myOp.todoDetails[i].completed ? 'checked' : ''} /> 
                            <input class="editBtn" type="text" value="${myOp.todoDetails[i].title}" data-index="${i}" readonly /> </div>
                            <button id="${i}" class="remove-btn"> <i class="fas fa-trash"></i></button>
                        </li> <hr>`;
      }
    }
    // ------------------Remove functionality-------------------------------------
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        myOp.deleteRow(index, this);
      });
    });

    // -----------------Edit task functionality--------------------------------
    const editBtn = document.querySelectorAll('.editBtn');
    editBtn.forEach((editElement) => {
      editElement.addEventListener('click', () => {
        const index = editElement.getAttribute('data-index');
        const editInput = document.querySelector(`input.editBtn[data-index="${index}"]`);
        editInput.readOnly = false;
        editInput.addEventListener('blur', (event) => {
          const newTitle = event.target.value;
          myOp.updateRowTitle(index, newTitle, this);
          event.target.readOnly = true;
        });
      });
    });

    // -------------------checkbox code--------------------------
    const checkboxes = document.querySelectorAll('.edit-text');
    checkboxes.forEach((checkbox) => {
      const index = checkbox.parentNode.querySelector('.editBtn').getAttribute('data-index');
      const editInput = checkbox.parentNode.querySelector('.editBtn');
      const { completed } = myOp.todoDetails[index];

      checkbox.checked = completed;
      editInput.classList.toggle('completed', completed);

      checkbox.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
        editInput.classList.toggle('completed', isChecked);
        myOp.todoDetails[index].completed = isChecked;
        localStorage.setItem('todoData', JSON.stringify(myOp.todoDetails));
      });
    });
    // ---------------Clear all completed-----------------------
    document.querySelector('#btn-clearAll').addEventListener('click', () => {
      myOp.todoDetails = myOp.removeCompletedTask();
      this.displayList();
    });
  }
}