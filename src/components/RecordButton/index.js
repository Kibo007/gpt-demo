import useSpeechToText from 'react-hook-speech-to-text';
import { useEffect } from 'react';
import micIcon from './../../assets/mic.svg';

export const RecordButton = ({ handleChange, handleSubmit }) => {
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
    if (interimResult || results.length) {
      const prevText = results.reduce((acu, res) => {
        const text = res.transcript;
        return `${acu ? ` ${acu}` : ''} ${text}`;
      }, '');

      const text = `${prevText}${interimResult ? ` ${interimResult}` : ''}`;
      debugger;
      handleChange(text);
    }
  }, [interimResult, handleChange, results]);

  useEffect(() => {
    if (!isRecording && results.length > 0) {
      setResults([]);
      handleSubmit();
    }
  }, [isRecording, setResults, handleSubmit, results]);

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
      <span>{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
      <img data-recording={isRecording} src={micIcon} alt="" />
    </button>
  );
};
