import React, { forwardRef } from 'react';
import './index.scss';

const Video = forwardRef((props, ref) => {
  return <video ref={ref} muted controls={false} />;
});

export default Video;

// const loadMediaFirst = () => {
//     navigator.mediaDevices.removeEventListener('devicechange', checkVideo);
//     navigator.mediaDevices.removeEventListener('devicechange', checkAll);
//     if (type) {
//       if (type === 'video') {
//         navigator.mediaDevices.addEventListener('devicechange', checkVideo);
//       }
//       else {
//         navigator.mediaDevices.addEventListener('devicechange', checkAll);
//       }

//       loadMedia();
//     }
//   }
