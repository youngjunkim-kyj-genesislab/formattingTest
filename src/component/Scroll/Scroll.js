import React, { useRef, useEffect, useState } from 'react';
import { isChangeAnimation, lorem } from '../../util';
import part from './part.jpg';
import full from './full.jpg';
import full2 from './full2.jpg';
import full3 from './full3.jpeg';
import './index.scss';
let maximumLevel = 18;
const Scroll = () => {
  const imgRef = useRef();
  const scrollRef = useRef();
  const [recog, setRecog] = useState(false);
  const [bottomLocation, setBottomLocation] = useState(0);
  const [targetTop, setTargetTop] = useState(0);
  const [level, setLevel] = useState(0);
  const [levelText, setLevelText] = useState(0);
  const handleScroll = () => {
    // console.log(e);
    const location = isChangeAnimation({ ref: scrollRef, setShow: setRecog, value: true });
    // console.log(location);
    setBottomLocation(location.bottom);
    setTargetTop(location.targetTopLocation);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (bottomLocation >= targetTop) {
      let rule = 50;
      const nowLevel = parseInt((bottomLocation - targetTop) / rule);
      const value = 'level' + nowLevel;
      if (nowLevel < maximumLevel + 1) {
        setLevel(nowLevel);
        setLevelText(value);
      }
    }
  }, [targetTop, bottomLocation]);

  const getWhichImg = (value) => {
    if (value < maximumLevel) {
      return part;
    } else if (value >= maximumLevel) {
      return full;
    }
  };
  const style = {
    backgroundImage: `url(${getWhichImg(level)})`,
  };
  let loremTest = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(lorem);
    }
    return arr;
  };
  return (
    <>
      <div ref={scrollRef} className={`scroll-container ${recog}`}>
        <div className={`part-img ${levelText}`} style={style} alt='part' />
      </div>
      {loremTest()}
    </>
  );
};

export default Scroll;
