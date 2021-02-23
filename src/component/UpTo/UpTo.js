import React, { useEffect, useRef, useState } from 'react';
import { lorem } from '../../util';
import './index.scss';

const UpTo = () => {
  const txtRef = useRef();
  const [spanArr, setSpanArr] = useState([]);
  const splitText = () => {
    const spltedText = lorem.split(' ');
    let textArr = [];
    for (let i = 0; i < spltedText.length * 2; i++) {
      textArr.push(
        i % 2 === 0 ? (
          <span key={i} className='br'>
            &nbsp;
          </span>
        ) : (
          <span key={i} ref={txtRef} className={'txt ' + i}>
            {spltedText[i]}
          </span>
        )
      );
    }

    return textArr;
  };

  const testText = () => {
    const splitedText = lorem.split(' ');
    let textArr = [];
    console.log(splitedText);
  };

  useEffect(() => {
    // console.log(txtRef.current.style);
  }, []);

  return (
    <div className='upto-container'>
      {/* <div className='content1'>{splitText()}</div> */}
      {/* <div className='content1'>{testText()}</div> */}
      {/* <br /> */}
      <div className='content1'>{lorem}</div>
    </div>
  );
};

export default UpTo;
