import React, { useEffect } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import './index.scss';
import Button from './Button';

const themeObj = {
  platte: {
    blue: '#228bb3',
    gray: '#dbdbdb',
    pink: '#ff18af',
  },
};

const StyledTest = ({ ...props }) => {
  const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${(props) => props.color || 'black'};
    border-radius: 50%;
    ${(props) =>
      props.huge &&
      css`
        width: 10rem;
        height: 10rem;
      `}
  `;
  const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
  `;
  const data = [
    { name: '지원자 이력', color: '#3AA8F7', score: 60 },
    { name: '결함탐지', color: '#20B738', score: 40 },
    { name: '표절탐지', color: '#F42339', score: 50 },
  ];

  const onResize = (e) => {
    console.log(e);
  };
  useEffect(() => {
    window.addEventListener('resize', onResize);
  }, []);

  return (
    <div className='styled-test'>
      <div className='bar' />
      <div style={{ height: `calc(100vh - 300px) ` }} className='box'></div>
    </div>
  );
};

export default StyledTest;
