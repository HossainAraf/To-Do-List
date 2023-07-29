import {
  addTask,
  editTask,
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

  test('editTask should edit a task', () => {
    const task = {
      index: 2,
      description: 'This is Task 2',
      completed: false,
    };
    tasks = addTask(task.description);
    const str = 'This task is edited';
    task.description = str;
    tasks = editTask(2, str);
    expect(task.description).toBe('This task is edited');
  });
  test('updateTaskStatus should update the status of a task', () => {
    updateTaskStatus(0, true, tasks);
    expect(tasks[0].completed).toBeTruthy();
  });
});