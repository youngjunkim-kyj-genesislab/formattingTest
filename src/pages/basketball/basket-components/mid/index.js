import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Score from './score';
import { setStartToRedux } from '../../../../redux/basketball';
import './index.scss';

let mainTimer;

const Middle = () => {
  const dispatch = useDispatch();
  const basketball = useSelector((state) => state.basketball);
  const isUnder60 = basketball.mainTime <= 60;
  const formattedMinute = isUnder60
    ? moment.utc(basketball.mainTime * 1000).format('ss.SS')
    : moment.utc(basketball.mainTime * 1000).format('mm:ss');

  const setStart = () => {
    let mainTimer = setInterval(() => {
      dispatch(setStartToRedux());
    }, 100);
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
      </div>
      <div className='center'>
        <div className='total-timer'>{formattedMinute}</div>
        {/* //TODO : 1분 미만일때, 59.99 소수점 2단위 까지 나와야함 */}
        <div className='shot-clock'>{basketball.attackTime}</div>
        <button onClick={setStart}>전체 START</button>
      </div>
      <div className='team right'>
        <Score team='teamB' />
      </div>
    </div>
  );
};

export default Middle;
