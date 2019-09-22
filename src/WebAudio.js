import React, { useState } from 'react';

function WebAudio() {

  /*
    - This gives access to the Web Audio API - 
    When using Audio Context a BaseAudioContext is created to allow online & offline audio processing. You wouldn't use that directly but by using it's features
    https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext
  */

  // Create State for volume
  const [ masterGainValue, setMasterGainValue ] = useState(0);

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  // Master Gain
  const masterGain = audioContext.createGain();

  // connect node to the audio context to output sound
  masterGain.connect(audioContext.destination);

  // Set gain value to 0
  console.log(masterGain.gain.setValueAtTime(0, audioContext.currentTime));

  const play = () => {

  }

  const pause = () => {

  }

  const changeMasterVolume = (e) => {
    setMasterGainValue(e.target.value/100);
  }

  return (
    <div>
      <p>React Web Audio Api</p>
      <input 
        type='range'
        min='0'
        max='100'
        value={masterGainValue*100}
        onChange={changeMasterVolume}
      />
      <button 
        onMouseDown={play}
        onMouseUp={pause}
        >Play/Pause</button>
    </div>
  );
}

export default WebAudio;