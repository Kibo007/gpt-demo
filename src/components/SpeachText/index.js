import styles from './Layout.module.css';
import PropTypes from 'prop-types';

export const SpeachText = ({ speachText }) => {
  return (
    <>
      <div className={styles.speachTextContainer}>
        {speachText && speachText}
      </div>
      <div className={styles.mobileMessage}>
        <span>
          SpeechRecognition browser api is not working properly in mobile
          devices. For best expirience please use desktop device.{' '}
        </span>

        <a href="https://udn.realityripple.com/docs/Web/API/Web_Speech_API">
          Browser compatibility
        </a>
      </div>
    </>
  );
};

SpeachText.propTypes = {
  speachText: PropTypes.string.isRequired,
};
