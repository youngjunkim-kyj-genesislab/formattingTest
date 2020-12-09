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

export const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
