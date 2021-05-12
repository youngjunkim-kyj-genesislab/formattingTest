import React from 'react';

const Empty = () => {
  function sum() {
    console.log('object');
    console.log(arguments);
  }
  sum(1, 2);
  sum(1, 2, 3);
  return <div></div>;
};

export default Empty;
