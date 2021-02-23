import longScreen1 from './longscreen1.jpg';
import longscreen2_1 from './longscreen2_1.jpg';
import longscreen2_2 from './longscreen2_2.jpg';
import './index.scss';
import { useEffect, useRef } from 'react';

const maxtransFormNum = 350;
const fromOffsetTop = 500;

const NewScroll = () => {
  const scrollContainerRef = useRef();
  const leftImgRef = useRef();
  const rightImgRef = useRef();
  const rightImg2Ref = useRef();

  function handleScroll(event) {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let containerOffsetTop = scrollContainerRef.current.offsetTop;
    let containerTotalHeight = scrollContainerRef.current.clientHeight;
    let transformNumber = scrollTop - containerOffsetTop;

    if (containerOffsetTop - fromOffsetTop <= scrollTop) {
      if (transformNumber <= maxtransFormNum) {
        leftImgRef.current.style.transform = `translate3d(0px, ${transformNumber / 1.1}px, 0px)`;
        rightImgRef.current.style.transform = `translate3d(0px, ${transformNumber / 2}px, 0px)`;
        rightImg2Ref.current.style.transform = `translate3d(0px, ${transformNumber / 2.1}px, 0px)`;
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div ref={scrollContainerRef} className='new-scroll-container'>
      <div className='container'>
        <div className='section left'>
          <div className='control-div left'>
            <div ref={leftImgRef} className='case-img'>
              <img src={longScreen1} />
            </div>
          </div>
        </div>
        <div className='section right'>
          <div className='control-div right'>
            <div ref={rightImgRef} className='case-img'>
              <img src={longscreen2_1} />
            </div>
            <div ref={rightImg2Ref} className='case-img'>
              <img src={longscreen2_2} />
            </div>
          </div>
        </div>
      </div>
      {/* <div id='counter1'>0</div> */}
    </div>
  );
};

export default NewScroll;
