import React from 'react';
import './index.scss';

const PdfTest = () => {
  const testArr = [
    <div className='test-div one'>1</div>,
    <div className='test-div two'>2</div>,
    <div className='test-div three'>3</div>,
    <div className='test-div four'>4</div>,
    <div className='test-div five'>5</div>,
    <div className='test-div six'>6</div>,
    <div className='test-div seven'>7</div>,
    <div className='test-div eight'>8</div>,
    <div className='test-div nine'>9</div>,
    <div className='test-div ten'>10</div>,
  ];
  return (
    <div className='pdf-container'>
      {testArr.map((item) => {
        return item;
      })}
    </div>
  );
};

export default PdfTest;
