import useSpeechToText from 'react-hook-speech-to-text';
import { useEffect } from 'react';

export const SpeachToText = ({ handleChange, handleSubmit }) => {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    if (interimResult) {
      handleChange(interimResult);
    }
  }, [interimResult, handleChange]);

  // in your component
  useEffect(() => {
    if (!isRecording && results.length > 0) {
      setResults([]);
      handleSubmit();
    }
  }, [isRecording, setResults, handleSubmit, results]);

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <div>
      <h1>Recording: {isRecording.toString()}</h1>
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <ul>
        {results.map((result) => (
          <li key={result.timestamp}>{result.transcript}</li>
        ))}
        {interimResult && <li>{interimResult}</li>}
      </ul>
    </div>
  );
};
