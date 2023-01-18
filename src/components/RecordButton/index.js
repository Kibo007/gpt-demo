import { useEffect, useCallback } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
import micIcon from './../../assets/mic.svg';
import PropTypes from 'prop-types';

export const RecordButton = ({ handleChange, handleSubmit, lang }) => {
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      handleChange(result);
    },
    onEnd: () => handleSubmit(),
  });

  const handleListen = useCallback(() => {
    listen({ interimResults: true, lang, continuous: true });
  }, [lang, listen]);

  const toggleListening = useCallback(
    (event) => {
      if (event.keyCode === 32) {
        listening ? stop() : handleListen();
      }
    },
    [listening, handleListen, stop]
  );

  useEffect(() => {
    window.addEventListener('keydown', toggleListening);
    return () => {
      window.removeEventListener('keydown', toggleListening);
    };
  }, [toggleListening]);

  return (
    <button onClick={listening ? stop : handleListen}>
      <span>{listening ? 'Stop Recording' : 'Start Recording'}</span>
      <img data-recording={listening} src={micIcon} alt="" />
    </button>
  );
};

RecordButton.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};
