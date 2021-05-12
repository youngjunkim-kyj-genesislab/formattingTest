import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowIcon } from '../../../../../icon';
import { plusFoul } from '../../../../../redux/basketball';
import './index.scss';

const up = 'up';
const down = 'down';

const Score = ({ team }) => {
  const basketball = useSelector((state) => state.basketball);
  const dispatch = useDispatch();

  const addFoul = (count) => {
    dispatch(plusFoul(team, count));
  };

  return (
    <div className='score-container'>
      {team === 'teamB' && (
        <div className='foul-num'>
          <div className='foul-num-div'>
            <span onClick={() => addFoul(+1)} className={up}>
              <ArrowIcon />
            </span>
            <span className='num'>{basketball[team].foul}</span>
            <span className={down} onClick={() => addFoul(-1)}>
              <ArrowIcon />
            </span>
          </div>
        </div>
      )}
      <div className={`score-num ${team}`}>{basketball[team].score}</div>
      {team === 'teamA' && (
        <div className='foul-num'>
          <div className='foul-num-div'>
            <span className={up} onClick={() => addFoul(+1)}>
              <ArrowIcon />
            </span>
            <span className='num'>{basketball[team].foul}</span>
            <span className={down} onClick={() => addFoul(-1)}>
              <ArrowIcon />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Score;
