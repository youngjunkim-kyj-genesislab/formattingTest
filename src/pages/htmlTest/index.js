import React, { useState, useRef } from 'react';
import { makeHtmlCode } from '../../util';

const HtmlTest = () => {
  const totalRef = useRef();
  const [htmlValue, setHtmlValue] = useState('');
  const btnClick = () => {
    let htmlCode = makeHtmlCode();

    htmlCode = htmlCode.replace(`{{bodyStyle}}`, `h1 {color:'red'} `);
    htmlCode = htmlCode.replace(`{{bodyContent}}`, totalRef.current.outerHTML);
    return setHtmlValue(htmlCode);
  };
  return (
    <div ref={totalRef}>
      <h1
        style={{
          color: `rgb(${Math.floor(Math.random() * 100)},${Math.floor(
            Math.random() * 120
          )},${Math.floor(Math.random() * 50)})`,
        }}
      >
        HtmlTest
      </h1>
      <button onClick={btnClick}>변환 및 전송</button>
      <div dangerouslySetInnerHTML={{ __html: htmlValue }} />
    </div>
  );
};

export default HtmlTest;
