
import renderTodoList from './display.js';

export class Task {
  constructor(completed, description, index) {
    this.completed = completed;
    this.description = description;
    this.index = index;
  }
}
