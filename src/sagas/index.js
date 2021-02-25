import { all } from 'redux-saga/effects';
import todoSagas from './todo/todo';

export default function* rootSaga() {
  yield all([todoSagas()]);
}
