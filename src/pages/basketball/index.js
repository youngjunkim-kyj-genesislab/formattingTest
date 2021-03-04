import React, { useRef, useState } from 'react';
import './index.scss';
import Board from './board.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setResetToRedux, setTeamNameToRedux } from '../../redux/basketball';
import Sound from './videoplayback.mp3';
import Top from './basket-components/top';
import Middle from './basket-components/mid';

const BasketBall = () => {
  const audioRef = useRef();
  const [sound, setSound] = useState(false);
  const plusScore = () => {};
  const dispatch = useDispatch();

  const setReset = () => {
    dispatch(setResetToRedux());
  };

  useEffect(() => {
    if (sound) {
      audioRef.current.play();
    }
    return () => {};
  }, [sound]);
  //TODO : 팀 이름 적는것까지만 진행한 상태, 팀 스코어 부분도 만들어서 리덕스에 넣기및 key event 추가하기
  return (
    <div className='basket-container'>
      <Top />
      <Middle />
      <button onClick={() => setSound(!sound)}>사운드 재생</button>
      <audio ref={audioRef} src={Sound} />
    </div>
  );
};

export default BasketBall;
