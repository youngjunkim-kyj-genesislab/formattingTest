import React, { useEffect, useState, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoList } from '../redux/todo';

const Todo = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const reduxDispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todoReduceer);
  console.log(todoList);
  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'title') setTitle(value);
    if (name === 'desc') setDesc(value);
  };

  const btnonClick = () => {
    reduxDispatch(addTodoList([{ title, desc }]));
    setTitle('');
    setDesc('');
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h3>투두리스트</h3>
      <div>
        <input value={title} placeholder='제목' onChange={onChange} name='title' />
        <br />
        <input value={desc} onChange={onChange} name='desc' placeholder='할일' />
        <br />
        <button onClick={btnonClick}>등록</button>
      </div>
      <div>목록</div>
      <div>
        <ul>
          {todoList.map((item, idx) => (
            <li key={idx}>
              {item.title} : {item.desc}
            </li>
          ))}{' '}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
