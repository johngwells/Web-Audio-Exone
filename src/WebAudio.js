import React, { useState } from 'react';

function WebAudio() {

  /*
    - This gives access to the Web Audio API - 
    When using Audio Context a BaseAudioContext is created to allow online & offline audio processing. You wouldn't use that directly but by using it's features
    https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext
  */

  // Create State for volume
  const [ masterGainValue, setMasterGainValue ] = useState(0);
  const [ oscillatorNode, setOscillatorNode] = useState([]);

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  // Master Gain
  const masterGain = audioContext.createGain();

  // connect node to the audio context to output sound
  masterGain.connect(audioContext.destination);

  // Set gain value to 0
  console.log(masterGain.gain.setValueAtTime(0, audioContext.currentTime));
  // masterGain.gain.setValueAtTime(.5, audioContext.currentTime
  

  const addOscillatorNode = () => {

    // Oscillator gain
    const oscillatorGain = audioContext.createGain();
    // oscillatorGain.gain.setValueAtTime(0, audioContext.currentTime);
    // oscillatorGain.gain.value = 0;
    masterGain.gain.setValueAtTime(0, audioContext.currentTime)
    oscillatorGain.connect(audioContext.destination);
  
    // Create an oscillator node
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(90, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
  
    const oscillatorValues =  {
      oscillator: oscillator,
      oscillatorGain: oscillatorGain,
      type: oscillator.type.saw,
      frequency: oscillator.frequency.value,
      gain: .1
    }

    console.log(setOscillatorNode([...oscillatorNode, oscillatorValues]))
  }

  const play = () => {
    // oscillatorGain.gain.setTargetAtTime(masterGainValue, audioContext.currentTime, 0.001);
    // masterGain.gain.value = 0.9;
    const oscillator = audioContext.createOscillator();
    // oscillator.connect(audioContext.destination);
    oscillator.stop();

  }

  const pause = () => {
    masterGain.gain.setTargetAtTime(0, audioContext.currentTime, 0.001);
  }

  const changeMasterVolume = (e) => {
    setMasterGainValue(e.target.value/100);
  }

  return (
    <div>
      <p>React Web Audio Api</p>
      <button 
        onClick={addOscillatorNode}
      >Activate</button>
      <p>Master Volume:</p>
      <input 
        type='range'
        min='0'
        max='100'
        value={masterGainValue*100}
        onChange={changeMasterVolume}
      />
      <button
        onClick={play}
        onMouseDown={play}
        onMouseUp={pause}
        >Play/Pause</button>
    </div>
  );
}

export default WebAudio;