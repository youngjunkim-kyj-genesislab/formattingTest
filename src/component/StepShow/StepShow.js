// import React, { useRef, useState, useEffect } from 'react';
// import './index.scss';

// const StepShow = () => {
//   return (
//     <div className='step-show-container'>
//       <div className='box-container'>
//         <div className='box first'>
//           <span>FIRST</span>
//         </div>
//         <div className='box second'>
//           <span>SECOND</span>
//         </div>
//         <div className='box third'>
//           <span>THIRD</span>
//         </div>
//         <div className='box fourth'>
//           <span>FOURTH</span>
//         </div>
//         <div className='box fifth'>
//           <span>FIFTH</span>
//         </div>
//         <div className='box sixth'>
//           <span>SIXTH</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepShow;

import React, { useRef, useState, useEffect } from 'react';
import { isChangeAnimation } from '../../util';
import './index.scss';
const StepShow = () => {
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();
  const fiveRef = useRef();
  const sixRef = useRef();
  const sevenRef = useRef();
  const eightRef = useRef();
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');
  const [five, setFive] = useState('');
  const [six, setSix] = useState('');
  const [seven, setSeven] = useState('');
  const [eight, setEight] = useState('');

  const handleScroll = () => {
    isChangeAnimation({ ref: oneRef, setShow: setOne });
    isChangeAnimation({ ref: twoRef, setShow: setTwo });
    isChangeAnimation({ ref: threeRef, setShow: setThree });
    isChangeAnimation({ ref: fourRef, setShow: setFour });
    isChangeAnimation({ ref: fiveRef, setShow: setFive });
    isChangeAnimation({ ref: sixRef, setShow: setSix });
    isChangeAnimation({ ref: sevenRef, setShow: setSeven });
    isChangeAnimation({ ref: eightRef, setShow: setEight });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='step-show-container'>
      <div className='column first'>
        <div ref={fourRef} className={`column-item ${four} four`}>
          <span>FOUR</span>
        </div>
      </div>
      <div className='column second'>
        <div ref={twoRef} className={`column-item ${two} two`}>
          <span>TWO</span>
        </div>
        <div ref={sevenRef} className={`column-item ${seven} seven`}>
          <span>SEVEN</span>
        </div>
      </div>
      <div className='column third'>
        <div ref={oneRef} className={`column-item ${one} one`}>
          <span>ONE</span>
        </div>
        <div ref={sixRef} className={`column-item ${six} six`}>
          <span>SIX</span>
        </div>
      </div>

      <div className='column fourth'>
        <div ref={threeRef} className={`column-item ${three} three`}>
          <span>THREE</span>
        </div>
        <div ref={eightRef} className={`column-item ${eight} eight`}>
          <span>EIGHT</span>
        </div>
      </div>
      <div className='column fifth'>
        <div ref={fiveRef} className={`column-item ${five} five`}>
          <span>FIVE</span>
        </div>
      </div>
    </div>
  );
};

export default StepShow;
