import { all } from "redux-saga/effects";
import { watchFetchExamplesTasks } from "./features/tasks/tasksSaga";

export default function * rootsaga() {
  yield all([
    watchFetchExamplesTasks(),
  ]);
}