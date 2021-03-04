import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { testApi } from '../../api/api.js';
import { getState } from '../../index.js';

import {
  addTodoListSuccess,
  ADD_TODO_LIST_SAGA,
  getApiSuccess,
  getImgSuccess,
  GET_IMG,
} from '../../redux/todo';

function* addTodo({ payload }) {
  let fetchData;
  if (!getState().todoReduceer.fetchData) {
    yield fetch(testApi)
      .then((res) => res.json())
      .then((res) => {
        fetchData = res;
      });
    yield put(getApiSuccess(fetchData));
  }

  yield put(addTodoListSuccess(payload));
}

function* getImgSaga() {
  const maximum = 100;
  const minimum = 10;
  const rdm1 = Math.random();
  const randomNumber = Math.floor(rdm1 * (maximum - minimum) + minimum);
  let imgUrl;
  yield fetch(`https://picsum.photos/id/${randomNumber}/400/400`)
    .then((res) => {
      imgUrl = res.url;
    })
    .catch((err) => {
      console.error(err);
    });
  yield put(getImgSuccess(imgUrl));
}

export function* addTodoSaga() {
  yield takeEvery(ADD_TODO_LIST_SAGA, addTodo);
}

export function* watchGetImg() {
  yield takeEvery(GET_IMG, getImgSaga);
}

export default function* todoSagas() {
  yield all([fork(addTodoSaga), fork(watchGetImg)]);
}
