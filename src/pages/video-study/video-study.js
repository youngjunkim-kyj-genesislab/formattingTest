import React, { useEffect, useRef, useState } from 'react';
import './index.scss';
import RecordRTC from 'recordrtc';
import Video from '../../component/Video';
import SoundBar from '../../component/SoundBar';
import { useDispatch, useSelector } from 'react-redux';
import { setVideo } from '../../redux/video';
var mediaStream = null;
var recorder = null;
var imageCapture;
const getConnectedDevices = async (deviceType) => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter((device) => device.kind === deviceType);
};

const VideoStudy = () => {
  const [type, setType] = useState('');
  const [masking, setMasking] = useState(true);
  const [recDone, setRecDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const videoRef = useRef();
  const imgRef = useRef();
  const afterVideoRef = useRef();
  const { video } = useSelector((state) => state.videoReducer);

  const checkVideo = async () => {
    const videoInputCount = await getConnectedDevices('videoinput');
  };

  const checkAudio = async () => {
    const audioInputCount = await getConnectedDevices('audioinput');
  };

  const getConstraint = () => {
    switch (type) {
      case 'video':
        if (isMobile) {
          return { video: { facingMode: 'user' } };
        } else {
          return { video: true };
        }

      case 'audio':
        return { audio: true };
      case 'all':
        if (isMobile) {
          return { video: { facingMode: 'user' }, audio: true };
        } else {
          return { video: true, audio: true };
        }

      default:
        return { audio: true };
    }
  };

  const loadMedia = async () => {
    try {
      if (isMobile) {
        if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
          alert("Let's get this party started");
        } else {
          alert('false');
        }
      }
      mediaStream = await navigator.mediaDevices.getUserMedia(getConstraint(type));

      navigator.mediaDevices.getUserMedia(getConstraint(type)).then((res) => {
        const track = res.getVideoTracks()[0];
        imageCapture = new ImageCapture(track);
      });
      console.log(mediaStream);
      // alert(mediaStream);
      playVideoAfterLoading(mediaStream);
    } catch (err) {
      console.log(err);
    }
  };

  const playVideoAfterLoading = (stream) => {
    const video = videoRef.current;
    if ('srcObject' in video) {
      video.srcObject = stream;
    } else {
      video.src = URL.createObjectURL(stream);
    }
    video.onloadedmetadata = function () {
      video.play();
    };
  };

  function loadMedaiFirst(type) {
    if (!isMobile) {
      if (type === 'video') {
        navigator.mediaDevices.addEventListener('devicechange', checkVideo);
      } else if (type === 'audio') {
        navigator.mediaDevices.addEventListener('devicechange', checkAudio);
      } else if (type === 'all') {
        navigator.mediaDevices.addEventListener('devicechange', checkVideo);
        navigator.mediaDevices.addEventListener('devicechange', checkAudio);
      }
    }

    loadMedia();
  }

  const startRecording = () => {
    if (mediaStream) {
      recorder = RecordRTC(mediaStream, {
        type: 'video',
        disableLogs: true,
        recorderType: RecordRTC.MediaStreamRecorder,
        mimeType: 'video/webm;codecs=h264',
      });
      recorder.startRecording();
    } else {
      alert('video, audio, all 중 하나를 선택해주세요');
    }
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stopRecording(() => {
        const blob = recorder.getBlob();
        dispatch(setVideo(blob));
        setRecDone(true);
      });
    }
  };

  useEffect(() => {
    if (type && videoRef) {
      loadMedaiFirst(type);
    }

    return () => {};
  }, [type]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    return () => {
      setIsMobile(false);
    };
  }, []);

  useEffect(() => {
    if (recDone && afterVideoRef) {
      afterVideoRef.current.src = URL.createObjectURL(video);
      afterVideoRef.current.srcObject = null;
    }
  }, [recDone]);

  function takePhoto() {
    imageCapture.takePhoto().then((blob) => {
      console.log(blob);
      imgRef.current.src = URL.createObjectURL(blob);
    });
  }

  return (
    <div className='video-sutdy-container'>
      <div className='btn-wrapper'>
        <button name='video' onClick={(e) => setType(e.target.name)}>
          video
        </button>
        <button name='audio' onClick={(e) => setType(e.target.name)}>
          audio
        </button>
        <button name='all' onClick={(e) => setType(e.target.name)}>
          all
        </button>
      </div>
      <div className={`sub-btn-wrapper ${type}`}>
        <button onClick={() => setMasking(!masking)}>마스킹 {masking ? '제거' : '추가'}</button>
      </div>
      <div className='control'>
        <button className='rec' onClick={startRecording}>
          녹화
        </button>
        <button className='rec-stop' onClick={stopRecording}>
          중지
        </button>
        <button onClick={takePhoto}>캡쳐</button>
      </div>

      <div className='video-wrapper'>
        {recDone ? (
          <video ref={afterVideoRef} className='after-rec' controls autoPlay src={video} />
        ) : (
          <video ref={videoRef} />
        )}

        <div className={`masking-div ${type} ${masking}`}>Masking</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img ref={imgRef} className='capture-img' />
      </div>
      <div className='btm-wrapper'>
        {recDone ? <button>초기화</button> : <SoundBar type={type} />}
      </div>
    </div>
  );
};

export default VideoStudy;
