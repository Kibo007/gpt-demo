import { useSpeechRecognition } from 'react-speech-kit';
import micIcon from './../../assets/mic.svg';

export const RecordButton = ({ handleChange, handleSubmit }) => {
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      handleChange(result);
    },
    onEnd: () => handleSubmit(),
  });

  const handleListen = () => {
    listen({ interimResults: true, lang: 'en-US', continuous: true });
  };

  return (
    <button onClick={listening ? stop : handleListen}>
      <span>{listening ? 'Stop Recording' : 'Start Recording'}</span>
      <img data-recording={listening} src={micIcon} alt="" />
    </button>
  );
};
