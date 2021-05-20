import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoList, getImg, todoCheckChange } from '../../redux/todo';
import './index.scss';
const SagaTest = (props) => {
  const [todo, setTodo] = useState('');
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { todoList, imgUrl } = useSelector((state) => state.todoReduceer);
  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const buttonClick = () => {
    if (todo) {
      dispatch(addTodoList({ title: todo, checked: false }));
      setTodo('');
      inputRef.current.focus();
    } else {
      alert('내용을 입력해 주세요.');
    }

    // 리덕스 액션 시작
  };

  const inputKeyEnter = (e) => {
    if (e.keyCode === 13) {
      buttonClick();
    }
  };

  const imgGetBtnClick = () => {
    dispatch(getImg());
  };

  useEffect(() => {
    inputRef.current.addEventListener('keydown', inputKeyEnter);
    return () => {
      inputRef?.current?.removeEventListener('keydown', inputKeyEnter);
    };
  }, [todo]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onClickButton = (...arg) => {
    console.log(arg);
  };

  return (
    <div className='page-wrapper'>
      <div className='saga-test-container'>
        <div className='title'>SagaTest Page</div>
        <div className='input-wrapper'>
          <input
            className='input-text'
            ref={inputRef}
            name='todo'
            placeholder='note Todolist'
            type='text'
            value={todo}
            onChange={handleOnChange}
          />
          <button onClick={buttonClick}>입력</button>
        </div>
        {todoList.map((item, idx) => (
          <div className='list-wrapper' key={idx}>
            <input
              className='checkbox'
              onChange={() => dispatch(todoCheckChange(idx))}
              type='checkbox'
              checked={item.checked}
            />
            <span className={`todo-title ${item.checked ? 'line' : ''}`}>{item.title}</span>
          </div>
        ))}

        <div className='pic-container'>
          <div>
            <button onClick={() => props.history.push('/animation')}>페이지 이동</button>
            <button onClick={imgGetBtnClick}>이미지 GET</button>
          </div>
          {imgUrl && <img className='img' alt='??' src={imgUrl} />}
        </div>
      </div>
      <div>
        hi
        <button onClick={() => onClickButton(1, 2, 3)}>클릭</button>
      </div>
    </div>
  );
};

export default SagaTest;
