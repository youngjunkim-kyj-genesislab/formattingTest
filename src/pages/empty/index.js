import React from 'react';

const Empty = () => {
  function sum() {
    console.log('object');
    console.log(arguments);
  }
  // sum(1, 2);
  // sum(1, 2, 3);

  function onButtonClick(e) {
    // console.log(e);
    fetch('http://172.30.1.59:4000').then((res) => {
      console.log(res);
    });
  }

  return (
    <div>
      <button onClick={onButtonClick}>hi</button>
    </div>
  );
};

export default Empty;
