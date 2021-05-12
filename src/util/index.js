export const isChangeAnimation = ({ ref, setShow, value }) => {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let windowInnerHeight = window.innerHeight;
  let bottom = scrollTop + windowInnerHeight; //* 보이는 화면의 바닥 위치
  const targetTopLocation = ref.current.offsetParent.offsetTop + ref.current.offsetTop + 50;
  // *  기본 0
  //   * 60은 빼도되고 줄여도됨. 높을수록 덜보여도 액션 발생
  //   let pageBottom = targetTopLocation + ref.current.clientHeight + windowInnerHeight;
  //   console.log('===========');
  //   console.log({ bottom });
  if (value) {
    return { bottom, targetTopLocation };
  }
  if (bottom >= targetTopLocation) {
    setShow('show');
  } else {
    setShow('');
  }
  //   console.log(targetTopLocation);
};

// import { useEffect } from 'react';

// const useScroll = (ref, isParentNodeMain = true, hideNode = false) => {
//   // ref: 스크롤 이펙트 달릴 elem들의 container
//   // isParentNodeMain === false일 때 offset 보정 방법 다르게
//   // hideNode === true일 때 역방향 스크롤 하면 숨겨지도록
//   useEffect(() => {
//     const refElem = ref.current;
//     const refChildren = refElem.children;
//     let offsets = [];

//     for (let element of refChildren) {
//       offsets.push(
//         isParentNodeMain ? element.offsetTop : element.offsetTop + refElem.offsetParent.offsetTop
//       );
//     }

//     const handleScroll = () => {
//       let scrollHeight = window.scrollY + window.innerHeight; // 현재 스크롤위치
//       const showingIndex = offsets.filter((offset) => scrollHeight >= offset + 50);

//       for (let index in offsets) {
//         if (showingIndex.length === 0) {
//           break;
//         }
//         refChildren[index].classList.add('show');

//         if (index === String(showingIndex.length - 1)) {
//           break;
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
// };

// export default useScroll;

export const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

export const createAudioMeter = (
  { audioContext, onLoad, setVolume, soundSensitive, meterBarNumber },
  clipLevel,
  averaging,
  clipLag
) => {
  const processor = audioContext.createScriptProcessor(512);
  processor.clipping = false;
  processor.lastClip = 0;
  processor.volume = 0;
  processor.clipLevel = clipLevel || 0.98;
  processor.averaging = averaging || 0.95;
  processor.clipLag = clipLag || 750;
  processor.onaudioprocess = (event) => {
    const buf = event.inputBuffer.getChannelData(0);
    const bufLength = buf.length;
    let sum = 0;
    let x;

    for (let i = 0; i < bufLength; i += 1) {
      x = buf[i];
      if (Math.abs(x) >= clipLevel) {
        processor.clipping = true;
        processor.lastClip = window.performance.now();
      }
      sum += x * x;
    }

    const rms = Math.sqrt(sum / bufLength);
    processor.volume = Math.max(rms, processor.volume * processor.averaging);
    if (processor.volume && onLoad) {
      setVolume(processor.volume * soundSensitive * meterBarNumber);
    }
  };

  processor.connect(audioContext.destination);
  processor.checkClipping = function () {
    if (!this.clipping) return false;
    if (this.lastClip + this.clipLag < window.performance.now()) this.clipping = false;
    return this.clipping;
  };

  processor.shutdown = function () {
    this.disconnect();
    this.onaudioprocess = null;
  };

  return processor;
};

export const makeHtmlCode = () => {
  return `<html>
      <style>{{bodyStyle}}</style>
      <body> {{bodyContent}} </body>
    </html>`;
};
export const addComma = (num) => {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
};
