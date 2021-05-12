import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAttackTime,
  setAttackTimerExecute,
  setStartAttackTime,
  setAttackStop,
} from '../../../../redux/basketball';
import './index.scss';

let countTimer;

const Bottom = () => {
  const [setValue, setSetValue] = useState(14);
  const basketball = useSelector((state) => state.basketball);
  const { attackTime, isAttackTimerExecute } = basketball;
  const dispatch = useDispatch();
  const onChange = (e) => {
    setSetValue(e.target.value);
  };

  const onClickReset = () => {
    dispatch(setAttackTime(setValue));
  };
  const onClick24Second = () => {
    dispatch(setAttackTime(24));
  };

  const onClickStart = () => {
    dispatch(setAttackTimerExecute(!isAttackTimerExecute));
    countTimer = setInterval(() => {
      dispatch(setStartAttackTime());
    }, 100);
  };
  const onClickStop = () => {
    // TODO : 24초 Stop 하는게 잘 안됨...
    console.log('스탑누름');
    clearInterval(countTimer);
    dispatch(setAttackStop());
  };

  useEffect(() => {
    if (attackTime < 0) {
      clearInterval(countTimer);
      dispatch(setAttackTimerExecute(false));
    }
  }, [attackTime]);

  return (
    <div className='bottom-container'>
      <div className='ctm-btn-container'>
        <input
          className='ctm-btn'
          value={setValue}
          type='number'
          min='0'
          max='24'
          onChange={onChange}
        />
        <div className='ctm-btn' onClick={onClickReset}>
          RESET {setValue}s
        </div>
        <div className='ctm-btn' onClick={onClick24Second}>
          RESET 24s
        </div>
        <div className='ctm-btn' onClick={isAttackTimerExecute ? onClickStop : onClickStart}>
          {isAttackTimerExecute ? 'STOP' : 'START'}
        </div>
      </div>
    </div>
  );
};

export default Bottom;
