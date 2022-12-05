import { all } from "redux-saga/effects";
import { saga } from "./features/tasks/tasksSaga";

export default function* rootsaga() {
  yield all([
    saga(),
  ]);
}