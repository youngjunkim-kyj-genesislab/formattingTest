export const ADD_TODO_LIST_SAGA = 'add-todo-list-saga';

export const ADD_TODO_LIST_SUCCESS = 'add-todo-list-success';
export const TESTTYPE = 'test-type';
export const GET_FETCH_DATA = 'get-fetch-data';
export const TODO_CHECKED_CHANGE = 'todo-checked-change';
export const GET_IMG = 'get-image';
export const GET_IMG_SUCCESS = 'get-image-success';

export const TestAction = (data) => {
  return {
    type: TESTTYPE,
    payload: data,
  };
};

export const addTodoList = (data) => ({
  type: ADD_TODO_LIST_SAGA,
  payload: data,
});

export const addTodoListSuccess = (data) => {
  return {
    type: ADD_TODO_LIST_SUCCESS,
    payload: data,
  };
};

export const todoCheckChange = (idx) => {
  return {
    type: TODO_CHECKED_CHANGE,
    payload: idx,
  };
};

export const getApiSuccess = (data) => {
  return {
    type: GET_FETCH_DATA,
    payload: data,
  };
};

export const getImg = () => {
  return {
    type: GET_IMG,
  };
};

export const getImgSuccess = (url) => {
  return {
    type: GET_IMG_SUCCESS,
    payload: url,
  };
};

const initialState = { todoList: [], fetchData: null, imgUrl: null };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST_SUCCESS: {
      return {
        ...state,
        // todoList: state.todoList.concat(action.payload),
        todoList: state.todoList.concat({
          title: action.payload.title,
          checked: action.payload.checked,
        }),
      };
    }
    case GET_FETCH_DATA: {
      return {
        ...state,
        fetchData: action.payload,
      };
    }
    case TODO_CHECKED_CHANGE: {
      for (let i = 0; i < state.todoList.length; i++) {
        if (i === action.payload) {
          state.todoList[action.payload].checked = !state.todoList[action.payload].checked;
        }
      }

      return {
        ...state,
        todoList: state.todoList,
      };
    }
    case GET_IMG_SUCCESS: {
      return {
        ...state,
        imgUrl: action.payload,
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
