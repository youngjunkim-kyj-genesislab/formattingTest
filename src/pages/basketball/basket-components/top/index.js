import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTeamNameResetToRedux, setTeamNameToRedux } from '../../../../redux/basketball';
import './index.scss';
const Top = () => {
  const dispatch = useDispatch();
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const basketball = useSelector((state) => state.basketball);

  const teamNameOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === 'teamA') setTeamA(value);
    if (name === 'teamB') setTeamB(value);
  };

  const setTeamName = () => {
    dispatch(setTeamNameToRedux({ teamA, teamB }));
  };

  const resetTeamName = () => {
    setTeamA('');
    setTeamB('');
    dispatch(setTeamNameResetToRedux());
  };

  return (
    <div className='top-container'>
      <input
        className='name-input A'
        type='text'
        onChange={teamNameOnChange}
        name='teamA'
        readOnly={basketball.teamA.name !== ''}
        value={teamA}
      />

      <div className='btn-div'>
        <button onClick={setTeamName}>팀 이름 설정</button>
        <button onClick={resetTeamName}>팀 이름 리셋</button>
      </div>
      <input
        className='name-input B'
        type='text'
        onChange={teamNameOnChange}
        name='teamB'
        readOnly={basketball.teamB.name !== ''}
        value={teamB}
      />
    </div>
  );
};

export default Top;
