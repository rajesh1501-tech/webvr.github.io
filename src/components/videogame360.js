import React, { useEffect, useState } from 'react';
import 'aframe';

const VideoGame360 = ({ questions = [], vidsrc }) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);
  const [video, setVideo] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [inVRMode, setInVRMode] = useState(false);

  const handleStartVideo = () => {
    const videoElement = document.getElementById('video');
    videoElement.play();
    setVideoPlaying(true);
  };

  useEffect(() => {
    const videoElement = document.getElementById('video');
    setVideo(videoElement);
  }, []);

  useEffect(() => {
    const videoElement = document.getElementById('video');
    if (!video || questions.length === 0 || gameOver) return;

    const handleTimeUpdate = () => {
      const currentQuestion = questions[currentQuestionIndex];

      if (!currentQuestion) return;

      if (video.currentTime >= currentQuestion.pauseAt && !showQuestion) {
        video.pause();
        setShowQuestion(true);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [video, questions, currentQuestionIndex, showQuestion, gameOver]);

  const handleChoiceSelection = (choice) => {
    if (questions.length === 0 || gameOver) return;

    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) return;

    if (choice === currentQuestion.correctChoice) {
      setShowQuestion(false);
      video.play();

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setGameOver(true);
      }
    } else {
      setShowTryAgain(true);
      setTimeout(() => {
        setShowTryAgain(false);
        setShowQuestion(true);
      }, 2000);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  const videoSrc = vidsrc === 'weld' ? '/weldvideo.mp4' : vidsrc === 'carp' ? '/carpentry.mp4' : '';

  return (
    <a-scene cursor="rayOrigin: mouse" xr-mode-ui="enterVRButton: #myEnterVRButton; XRMode: xr;">
      <a-entity camera look-controls wasd-controls="enabled:false" position="0 1.6 0">
        {inVRMode && (
          <a-cursor
            id="cursor"
            fuse="true"
            fuse-timeout="1500"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: red; shader: flat"
          />
        )}
      </a-entity>

      {!inVRMode && (
        <a-entity
          id="myEnterVRButton"
          geometry="primitive: plane; width: 2; height: 1"
          material="color: blue"
          position="1 4 -3"
          text="value: Enter VR Mode; align: center; color:white; font: https://cdn.aframe.io/fonts/Roboto-msdf.json;"
          event-set__click="scale: 1.2 1.2 1; color: red"
          onClick={() => setInVRMode(true)}
        />
      )}

      <a-videosphere src="#video" rotation="0 -90 0" />
      <video
        id="video"
        crossOrigin="anonymous"
        webkit-playsinline="true"
        playsInline
      >
        <source src={videoSrc} />
      </video>

      {!videoPlaying && (
        <a-entity
          geometry="primitive: plane; width: 2; height: 1"
          material="color: green"
          position="0 1 -3"
          text="value: Start Video; align: center; font: https://cdn.aframe.io/fonts/Roboto-msdf.json;"
          event-set__click="scale: 1.2 1.2 1; color: red"
          onClick={handleStartVideo}
        />
      )}

      {showQuestion && !showTryAgain && currentQuestion && !gameOver && (
        <a-entity position="0 0 -3">
          <a-entity
            geometry="primitive: plane; width: 3; height: 2"
            material="color: white; opacity: 0.8"
            position="1 1.5 0"
            text={`value: ${currentQuestion.question}; align: center; font: https://cdn.aframe.io/fonts/Roboto-msdf.json;`}
          />

          <a-entity position="0 -0.5 0">
            <a-entity
              geometry="primitive: plane; width: 2; height: 1"
              material="color: green"
              position="0 0.5 0"
              text={`value: ${currentQuestion.choice1}; align: center; font: https://cdn.aframe.io/fonts/Roboto-msdf.json;`}
              event-set__click="scale: 1.2 1.2 1; color: red"
              onClick={() => handleChoiceSelection('choice1')}
            />
            <a-entity
              geometry="primitive: plane; width: 2; height: 1"
              material="color: green"
              position="0 -0.5 0"
              text={`value: ${currentQuestion.choice2}; align: center; font: https://cdn.aframe.io/fonts/Roboto-msdf.json;`}
              event-set__click="scale: 1.2 1.2 1; color: red"
              onClick={() => handleChoiceSelection('choice2')}
            />
            <a-entity
              geometry="primitive: plane; width: 2; height: 1"
              material="color: green"
              position="2 0.5 0"
              text={`value: ${currentQuestion.choice3}; align: center; font: https://cdn.aframe.io/fonts/Roboto-msdf.json;`}
              event-set__click="scale: 1.2 1.2 1; color: red"
              onClick={() => handleChoiceSelection('choice3')}
            />
            <a-entity
              geometry="primitive: plane; width: 2; height: 1"
              material="color: green"
              position="2 -0.5 0"
              text={`value: ${currentQuestion.choice4}; align: center; font: https://cdn.aframe.io/fonts/Roboto-msdf.json;`}
              event-set__click="scale: 1.2 1.2 1; color: red"
              onClick={() => handleChoiceSelection('choice4')}
            />
          </a-entity>
        </a-entity>
      )}

      {showTryAgain && (
        <a-entity
          geometry="primitive: plane; width: 3; height: 2"
          material="color: red; opacity: 0.8"
          position="0 1 -3"
          text="value: Try Again!; align: center; font: https://cdn.aframe.io/fonts/Roboto-msdf.json;"
        />
      )}

      {gameOver && (
        <a-entity
          geometry="primitive: plane; width: 3; height: 2"
          material="color: blue; opacity: 0.8"
          position="0 1 0"
          text="value: Game Over!; align: center; font: https://cdn.aframe.io/fonts/Roboto-msdf.json;"
        />
      )}
    </a-scene>
  );
};

export default VideoGame360;