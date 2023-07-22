export default class CrudOperations {
  constructor() {
    const previousData = localStorage.getItem('todoData');
    this.todoDetails = previousData ? JSON.parse(previousData) : [];
  }

  addRow(title, completed, index) {
    const todo = { title, completed, index };
    this.todoDetails.push(todo);
    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));
  }

}