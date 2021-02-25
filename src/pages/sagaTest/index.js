import React, { useState, useRef } from 'react';
import { addTodoList } from '../../redux/todo';

const SagaTest = () => {
  const [todo, setTodo] = useState('');
  const inputRef = useRef();

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const buttonClick = () => {
    addTodoList(todo);
    // 리덕스 액션 시작
  };

  return (
    <div className='saga-test-container'>
      <p>SagaTest Page</p>
      <label htmlFor='todo'>name</label>
      <input ref={inputRef} name='todo' type='text' value={todo} onChange={handleOnChange} />
      <button onClick={buttonClick}>입력</button>
    </div>
  );
};

export default SagaTest;
