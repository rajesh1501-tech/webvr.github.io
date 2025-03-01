import React, { useState } from "react";

const VoiceInput = () => {
  const [inputValue, setInputValue] = useState("");
  
  // Check if the browser supports SpeechRecognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // Configure recognition settings
  recognition.continuous = false;  // Stop after one phrase
  recognition.lang = "en-US";      // Set the language
  recognition.interimResults = false;  // Final results only

  // Handle the results from speech recognition
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;  // Get the recognized speech
    setInputValue(speechToText);  // Set it to the input field
  };

  // Handle errors
  recognition.onerror = (event) => {
    console.error("Speech Recognition Error: ", event.error);
  };

  // Start recognition when the button is clicked
  const startRecognition = () => {
    recognition.start();
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Speak something..."
      />
      <button onClick={startRecognition}>🎤 Start Voice Input</button>
    </div>
  );
};

export default VoiceInput;
