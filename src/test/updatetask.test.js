import {
  updateTaskStatus,
} from '../modules/addRmove.js';

describe('Task manager', () => {
  let tasks = [];
  beforeEach(() => {
    tasks = [
      {
        index: 0,
        description: 'Task 1',
        completed: false,
      },
      {
        index: 1,
        description: 'Task 2',
        completed: false,
      },
      {
        index: 2,
        description: 'Task 3',
        completed: false,
      },
    ];
  });
  test('updateTaskStatus should update the status of a task', () => {
    updateTaskStatus(0, true, tasks);
    expect(tasks[0].completed).toBeTruthy();
  });
});