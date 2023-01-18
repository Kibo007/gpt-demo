import { useSpeechSynthesis } from 'react-speech-kit';
import speakerIcon from './../../assets/speaker.svg';

export const SpeakButton = ({ text, lang }) => {
  const { speak, cancel, speaking, voices } = useSpeechSynthesis();
  const handleSpeak = () => {
    const voice = voices.find((voice) => {
      return voice.lang === lang;
    });

    speak({ text, voice: voice || voices[0], rate: 1, pitch: 1.1 });
  };
  return (
    <button onClick={speaking ? cancel : handleSpeak}>
      <span>{speaking ? 'Stop Speaking' : 'Start Speaking'}</span>
      <img data-recording={speaking} src={speakerIcon} alt="" />
    </button>
  );
};
