import React, { useState, useRef, useEffect } from 'react';
import logo from './logo-type@2x.png';
import './index.scss';

const LogoHover = () => {
  const logoRef = useRef();
  const mouseRef = useRef();
  const [mouseStyle, setMouseStyle] = useState({ position: 'absolute', top: '1px' });
  const [mouseClass, setMouseClass] = useState('');
  const moveFunc = (e) => {
    let newStyle = Object.assign({}, mouseStyle, {
      top: `${e.pageY - 10}px`,
      left: `${e.clientX - 10}px`,
    });
    setMouseClass('display');
    setMouseStyle(newStyle);
  };
  const leaveFunc = () => {
    setMouseClass('');
  };
  useEffect(() => {
    const targetImg = logoRef.current;

    targetImg.addEventListener('mousemove', moveFunc);
    targetImg.addEventListener('mouseleave', leaveFunc);

    return () => {
      targetImg.removeEventListener('mousemove', moveFunc);
      targetImg.removeEventListener('mouseleave', leaveFunc);
    };
  }, []);
  return (
    <div className='logo-hover-container'>
      <div ref={mouseRef} className={`mouse ${mouseClass}`} style={mouseStyle}>
        view
      </div>
      <img ref={logoRef} src={logo} alt='logo' />
    </div>
  );
};

export default LogoHover;
