import { call, put, delay, takeLatest, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    yield delay(2000)
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) { 
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler () {
  const tasks = yield select(selectTasks); // select() - pobieranie ze stora
  yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchExamplesTasks() {
  console.log("Saga działa"); 
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler); //cokolwiek się stanie, odpali się saveTasks....

}