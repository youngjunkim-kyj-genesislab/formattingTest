import React, { useEffect, useState, useRef } from 'react';
import Button from '../component/Button/Button';
import LogoHover from '../component/LogoHover/LogoHover';
import NewScroll from '../component/NewScroll';
import PagePercent from '../component/pagePercent';
import Scroll from '../component/Scroll/Scroll';
import StepShow from '../component/StepShow/StepShow';
import UnderBar from '../component/UnderBar/UnderBar';
import UnderBar2 from '../component/UnderBar/UnderBar2';
import UnderText from '../component/UnderText/UnderText';
import UpTo from '../component/UpTo/UpTo';
import './index.scss';

const AnimationTest = () => {
  return (
    <div className='animation'>
      <PagePercent />
      <h1>애니메이션 연습</h1>
      <h3>버튼 hover</h3>
      <Button />
      <hr />
      <h3>텍스트 위로 등장</h3>
      <UpTo />
      <hr />
      <h3>언더바</h3>
      <UnderBar />
      <UnderBar2 />
      <hr />
      <h3>아래 텍스트 대체</h3>
      <UnderText />
      <hr />
      <h3>로고 hover</h3>
      <LogoHover />
      <hr />
      <h3>순차적으로 등장</h3>
      <StepShow />
      <hr />
      <h3>스크롤 이벤트</h3>
      <Scroll />
      <NewScroll />

      <hr />
      <h3>스크롤 이벤트</h3>
      <Scroll />
    </div>
  );
};

export default AnimationTest;
