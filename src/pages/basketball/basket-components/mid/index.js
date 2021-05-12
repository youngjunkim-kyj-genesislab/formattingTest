import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Score from './score';
import {
  setAttackTimerExecute,
  setMainTimerExecute,
  setStartAttackTime,
  setStartToRedux,
  setMainStop,
} from '../../../../redux/basketball';
import './index.scss';
import ScoreControl from './score-control';
let mainTimer;
let attackTimer;
const Middle = () => {
  const dispatch = useDispatch();
  const basketball = useSelector((state) => state.basketball);
  const { attackTime, isAttackTimerExecute, isMainTimerExecute } = basketball;
  const isUnder60 = basketball.mainTime <= 60;
  const formattedMinute = isUnder60
    ? moment.utc(basketball.mainTime * 1000).format('ss.SS')
    : moment.utc(basketball.mainTime * 1000).format('mm:ss');

  const formattedAttackTime = moment.utc(attackTime * 1000).format('ss');

  const setStart = () => {
    if (!isMainTimerExecute) {
      mainTimer = setInterval(() => {
        dispatch(setStartToRedux());
      }, 100);
      attackTimer = setInterval(() => {
        dispatch(setStartAttackTime());
      }, 100);
      dispatch(setAttackTimerExecute(true));
      dispatch(setMainTimerExecute(true));
    }
  };

  const setMainStopFunc = () => {
    clearInterval(mainTimer);
    dispatch(setMainStop());
  };

  useEffect(() => {
    return () => {
      clearInterval(mainTimer);
    };
  }, []);
  return (
    <div className='middle-container'>
      <div className='team left'>
        <Score team='teamA' />
        <ScoreControl team='teamA' />
      </div>
      <div className='center'>
        <div className='total-timer'>{formattedMinute}</div>
        {/* //TODO : 1분 미만일때, 59.99 소수점 2단위 까지 나와야함 */}
        <div className='shot-clock'>{formattedAttackTime}</div>
        <button onClick={setStart}>전체 START</button>
        <br />
        <button onClick={setMainStopFunc}>메인 STOP</button>
      </div>
      <div className='team right'>
        <Score team='teamB' />
        <ScoreControl team='teamB' />
      </div>
    </div>
  );
};

export default Middle;
