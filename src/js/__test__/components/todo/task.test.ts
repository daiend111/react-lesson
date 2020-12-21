import {
  addTask,
  TaskState
} from '../../../components/todo/task';

describe('addTask', () => {
  it('高階関数として、stateを変更する関数を生成する', () => {
    const handleChangeState = addTask('something to do');
    const originalState: TaskState = {
      nextId: 1,
      tasks: []
    };
    expect(handleChangeState(originalState)).toEqual({
      nextId: 2,
      tasks: [
        {id: 1, done: false, message: 'something to do'}
      ]
    })
  });
});