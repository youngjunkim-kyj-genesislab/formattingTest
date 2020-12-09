export const isChangeAnimation = ({ ref, setShow }) => {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let windowInnerHeight = window.innerHeight;
  let bottom = scrollTop + windowInnerHeight; //* 보이는 화면의 바닥 위치
  const targetTopLocation = ref.current.offsetParent.offsetTop + ref.current.offsetTop + 50;
  // *  기본 0
  //   * 60은 빼도되고 줄여도됨. 높을수록 덜보여도 액션 발생
  //   let pageBottom = targetTopLocation + ref.current.clientHeight + windowInnerHeight;
  //   console.log('===========');
  //   console.log({ bottom });
  //   console.log({ 타겟위치: targetTopLocation });

  //   console.log({ ref: ref.current });

  if (bottom >= targetTopLocation) {
    setShow('show');
  } else {
    setShow('');
  }
  //   console.log(targetTopLocation);
};
