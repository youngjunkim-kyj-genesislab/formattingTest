import React, { useRef, useState } from 'react';
import './index.scss';
import Board from './board.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setAttackTime, setResetToRedux, setTeamNameToRedux } from '../../redux/basketball';
import Sound from './videoplayback.mp3';
import Top from './basket-components/top';
import Middle from './basket-components/mid';
import Bottom from './basket-components/bottom';
import { Helmet } from 'react-helmet';

const BasketBall = () => {
  const audioRef = useRef();
  const { attackTime } = useSelector((state) => state.basketball);
  const [sound, setSound] = useState(false);
  const plusScore = () => {};
  const dispatch = useDispatch();

  const setReset = () => {
    dispatch(setResetToRedux());
  };

  useEffect(() => {
    if (attackTime <= 1) {
      audioRef.current.play();
    }
    if (attackTime <= 0) {
      dispatch(setAttackTime(24));
    }
  }, [attackTime]);

  //TODO : 팀 이름 적는것까지만 진행한 상태, 팀 스코어 부분도 만들어서 리덕스에 넣기및 key event 추가하기
  return (
    <React.Fragment>
      <Helmet>
        <title>농구 전광판</title>
      </Helmet>
      <div className='basket-container'>
        <Top />
        <Middle />
        <Bottom />
        <audio ref={audioRef} src={Sound} />
      </div>
    </React.Fragment>
  );
};

export default BasketBall;
