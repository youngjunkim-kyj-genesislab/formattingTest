export const ADD_TODO_LIST = 'add/todo/list';

export const addTodoList = (data) => (
  console.log('액션함수', data),
  {
    type: ADD_TODO_LIST,
    todos: data[0],
  }
);
const initialState = { todoList: [{ title: '첫번째', desc: '할일' }] };
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST: {
      console.log(action);
      return {
        ...state,
        todoList: state.todoList.concat(action.todos),
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
