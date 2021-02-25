import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { addTodoListSuccess, ADD_TODO_LIST_SAGA } from '../../redux/todo';

function* addTodo({ payload }) {
  console.log(payload);
  yield put(addTodoListSuccess('추가된 값 아니지롱'));
}

export function* addTodoSaga() {
  yield takeEvery(ADD_TODO_LIST_SAGA, addTodo);
}

export default function* todoSagas() {
  yield all([fork(addTodoSaga)]);
}
