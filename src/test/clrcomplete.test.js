import {
  addTask,
  clrCompletedTasks,
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
  test('clrCompletedTasks should clear completed tasks', () => {
    const task = {
      index: 2,
      description: 'This is Task 2',
      completed: true,
    };
    tasks = addTask(task.description);
    clrCompletedTasks(tasks);
    expect(tasks).toHaveLength(1);
    expect(tasks).not.toContain(tasks[2]);
  });
});