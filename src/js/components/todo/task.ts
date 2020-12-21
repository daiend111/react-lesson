import { DeepReadonly } from '../../types';

export type Task = {
  id: number
  done: boolean
  message: string
};

export type TaskState = DeepReadonly<{
  nextId: number
  tasks: Task[]
}>;

export const easyClone = <T extends {}>(v: T): T => {
  return JSON.parse(JSON.stringify(v))
};


// (id: number) => (state: TaskState) => (state: TaskState)
export const toggleTask = (id: number) => {
  return (state: TaskState) => {
    const i = state.tasks.findIndex(task => { return task.id == id });
    const newTask = {
      ...state.tasks[i],
      done: !state.tasks[i].done
    };
    const newTasks = easyClone(state.tasks as Task[])
    newTasks[i] = newTask;
    return {
      ...state,
      tasks: newTasks
    }  
  }    
};

// (message: string) => (state: TaskState) => (state: TaskState)
export const addTask = (message: string) => {
  return (state: TaskState) => {
    const nextId = state.nextId;
    const newTask = {
      id: nextId,
      done: false,
      message: message
    };

    return {
      nextId: nextId + 1,
      tasks: state.tasks.concat(newTask)
    }
  }
};