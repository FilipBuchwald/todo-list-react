import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(task => task.id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    setAllDone: (state) => {
      for (const task of state.tasks) {
        task.done = true;
      }
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(task => task.id === taskId);
      tasks.splice(index, 1);
    },
    fetchExampleTasks: () => { },
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
  },
});

export const { addTask, toggleHideDone, toggleTaskDone, setAllDone, removeTask, fetchExampleTasks, setTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export const selectHideDone = state => selectTasks(state).hideDone;

export default tasksSlice.reducer;
