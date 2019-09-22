import React from 'react';

function WebAudio() {

  /*
    This gives access to the Web Audio API
    When using Audio Context a BaseAudioContext is created to allow online & offline audio processing
    You wouldn't use that directly but by using it's features
    https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext
  */

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  return (
    <div>
      <p>React Web Audio Api</p>
    </div>
  );
}

export default WebAudio;