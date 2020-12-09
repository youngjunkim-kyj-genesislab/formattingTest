import React, { useEffect, useRef } from 'react';
import { lorem } from '../../util';
import './index.scss';

const UpTo = () => {
  const txtRef = useRef([]);
  const splitText = () => {
    const spltedText = lorem.split(' ');
    let textArr = [];
    for (let i = 0; i < spltedText.length * 2; i++) {
      textArr.push(
        i % 2 === 0 ? (
          <span className='br'>&nbsp;</span>
        ) : (
          <span ref={txtRef} className={'txt ' + i}>
            {spltedText[i]}
          </span>
        )
      );
    }
    return textArr;
  };
  useEffect(() => {
    // console.log(txtRef.current.style);
  }, []);

  return (
    <div className='upto-container'>
      {/* <div className='content1'>{splitText()}</div> */}
      {/* <br /> */}
      <div className='content1'>{lorem}</div>
    </div>
  );
};

export default UpTo;
