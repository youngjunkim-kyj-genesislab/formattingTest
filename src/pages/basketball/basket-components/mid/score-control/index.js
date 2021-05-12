import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plusScore } from '../../../../../redux/basketball';
import './index.scss';

const minusOne = '-1';
const plusOne = '+1';
const plusTwo = '+2';
const plusThree = '+3';

const ScoreControl = ({ team }) => {
  const basketball = useSelector((state) => state.basketball);
  const dispatch = useDispatch();

  const addScore = (e) => {
    dispatch(plusScore(team, Number(e.target.name)));
  };

  return (
    <div className='count-btn-wrapper'>
      <button onClick={addScore} name={minusOne} className='count-btn'>
        {minusOne}
      </button>
      <button className='count-btn' name={plusOne} onClick={addScore}>
        {plusOne}
      </button>
      <button className='count-btn' name={plusTwo} onClick={addScore}>
        {plusTwo}
      </button>
      <button className='count-btn' name={plusThree} onClick={addScore}>
        {plusThree}
      </button>
    </div>
  );
};

export default ScoreControl;
