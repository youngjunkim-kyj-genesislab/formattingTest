import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
const Score = ({ team }) => {
  const basketball = useSelector((state) => state.basketball);
  console.log(basketball);
  return (
    <div className='score-container'>
      {team === 'teamB' && <div className='foul-num'>{basketball[team].foul}</div>}
      <div className='score-num'>{basketball[team].score}</div>
      {team === 'teamA' && <div className='foul-num'>{basketball[team].foul}</div>}
    </div>
  );
};

export default Score;
