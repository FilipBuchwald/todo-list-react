import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
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
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(task => task.id === taskId);
      tasks.splice(index, 1);
    },
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
    },
    fetchExampleTasksError: (state) => {
      state.loading = false;
    },
  },
});

export const { addTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  removeTask,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasks(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);
export const selectTaskByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return selectTasks(state).filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase()));
}

export const selectLoading = state => selectTasks(state).loading === true;

export default tasksSlice.reducer;
