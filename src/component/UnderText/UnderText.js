import React from 'react';
import './index.scss';

const UnderText = () => {
  return (
    <div className='under-text-container'>
      <span className='up'>Blog</span>
      <span aria-hidden='true' className='down'>
        Blog
      </span>
    </div>
  );
};

export default UnderText;

// * 참고 : https://codepen.io/RichardBray/pen/julhw
