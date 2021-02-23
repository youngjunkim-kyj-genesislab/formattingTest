import React from 'react';
import './index.scss';

const PathTest = () => {
  return (
    <div>
      <svg>
        <g>
          <path d='M264,191,287,198,264,224,214,198,200,185Z' fill='#000' />
          {/* <path d='M 300 200 L 550 100 H 10 V 200 Z' fill='#000' /> */}
          {/* <path d='M10 10 L50 10 L50 50 Z' fill='pink' /> */}
        </g>
      </svg>
    </div>
  );
};

export default PathTest;
