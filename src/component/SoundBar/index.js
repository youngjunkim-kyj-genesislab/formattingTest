import React, { useState, useEffect } from 'react';
import { createAudioMeter } from '../../util';
import './index.scss';

var audioContext = null;
var mediaStream = null;
var meter = null;
const soundSensitive = 10;
const meterBarNumber = 16;
var mediaStreamSource;
var onLoad = false;

const SoundBar = ({ type }) => {
  const [volume, setVolume] = useState(0);

  const loadMedia = () => {
    onLoad = true;
    try {
      navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      navigator.getUserMedia(
        {
          audio: {
            mandatory: {
              googEchoCancellation: 'false',
              googAutoGainControl: 'false',
              googNoiseSuppression: 'false',
              googHighpassFilter: 'false',
            },
            optional: [],
          },
        },
        onMicrophoneGranted,
        onMicrophoneDenied
      );
    } catch (e) {
      console.error(e);
    }
  };

  const onMicrophoneGranted = (stream) => {
    audioContext = new AudioContext();
    mediaStreamSource = audioContext.createMediaStreamSource(stream);
    meter = createAudioMeter({ audioContext, onLoad, setVolume, soundSensitive, meterBarNumber });
    mediaStreamSource.connect(meter);
  };
  const onMicrophoneDenied = () => {
    alert('마이크 사용을 거부하셨습니다.');
  };

  const checkAudio = () => {
    cleanup();
    loadMedia();
  };

  useEffect(() => {
    if (type && type !== 'video') {
      navigator.mediaDevices.addEventListener('devicechange', checkAudio);
      loadMedia();
    }

    return () => {
      navigator.mediaDevices.removeEventListener('devicechange', checkAudio);
      cleanup();
    };
  }, [type]);
  const cleanup = () => {
    onLoad = false;
    if (audioContext) {
      audioContext.close();
    }
    if (mediaStream) {
      mediaStream.getTracks().forEach(function (track) {
        track.stop();
      });
    }
    audioContext = null;
    mediaStream = null;
    meter = null;
  };
  return (
    <div className={`sound-bar-container ${type}`}>
      {type === 'video' && <div>video 는 사운드바를 표시하지 않습니다.</div>}
      {[...Array(meterBarNumber)].map((item, idx) => {
        const selected = volume >= idx;
        return <div className={`bar ${selected ? 'selected' : ''}`} key={idx} />;
      })}
    </div>
  );
};

export default SoundBar;
