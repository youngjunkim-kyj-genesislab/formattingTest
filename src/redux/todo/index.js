export const ADD_TODO_LIST_SAGA = 'add-todo-list-saga';

export const ADD_TODO_LIST_SUCCESS = 'add-todo-list-success';

export const addTodoList = (data) => {
  return {
    type: ADD_TODO_LIST_SAGA,
    payload: data,
  };
};

export const addTodoListSuccess = (data) => {
  return {
    type: ADD_TODO_LIST_SUCCESS,
    payload: data,
  };
};

const initialState = { todoList: [] };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST_SUCCESS: {
      return {
        ...state,
        todoList: state.todoList.concat(action.payload),
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
