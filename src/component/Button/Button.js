import React, { useState, useEffect, useRef } from 'react';
import './index.scss';

const Button = () => {
  const btnRef = useRef();
  const spanRef = useRef();
  useEffect(() => {
    const btn = btnRef.current;
    [btn].forEach((button) => {
      ['mouseenter', 'mouseout'].forEach((evt) => {
        button.addEventListener(evt, (e) => {
          let parentOffset = button.getBoundingClientRect(),
            relX = e.clientX - parentOffset.left,
            relY = e.clientY - parentOffset.top;
          // console.log(parentOffset);
          // console.log(e);
          // console.log('relX:', relX, 'e.clientX:', e.clientX, 'parentOffset.left:', parentOffset.left);
          // console.log(relX, relY);
          const span = spanRef.current;
          span.style.top = relY + 'px';
          span.style.left = relX + 'px';
        });
      });
    });
  }, []);
  return (
    <div ref={btnRef} className='button-container'>
      132
      <span ref={spanRef}></span>
    </div>
  );
};

export default Button;

// * 참고: https://codepen.io/erwstout/pen/GQvjZE
// * 참고2 : https://codepen.io/kjbrum/pen/wBBLXx
