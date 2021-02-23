import React, { useEffect, useState, useRef } from 'react';
import GIF from './walking_girl02.gif';
import './index.scss';

const marginTopHeight = 75;

const PagePercent = (props) => {
  const [scrollDirection, setScrollDirection] = useState('');

  const barRef = useRef();
  const imgRef = useRef();

  const handleScroll = (e) => {
    const barRefWidth = barRef.current;
    const gifRef = imgRef.current;
    let innerHeight = window.innerHeight - marginTopHeight;
    let bottomLocation = window.pageYOffset + innerHeight;
    let bodyHeight = document.body.scrollHeight;
    const parentValue = bodyHeight - innerHeight;
    const percentValue = (bottomLocation / parentValue) * 100 - 15;
    barRefWidth.style.width = percentValue + '%';

    // gifRef.style.left = ;
  };

  const handleWheel = (e) => {
    let delta;
    if (e.wheelDelta) {
      delta = e.wheelDelta;
    } else {
      delta = -1 * e.deltaY;
    }
    if (delta < 0) {
      setScrollDirection('down');
    } else if (delta > 0) {
      setScrollDirection('up');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel);
    // window.scrollTo({
    //   top: 0,
    // });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    // console.log('scroll 달라지면 처리할 액션');
    return () => {};
  }, [scrollDirection]);
  return (
    <div className='pagepercent-container'>
      <div ref={barRef} className='bar' />
      <img ref={imgRef} src={GIF} alt='gif' className={`gif ${scrollDirection}`} />
    </div>
  );
};

export default PagePercent;
