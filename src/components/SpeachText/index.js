import styles from './Layout.module.css';
import PropTypes from 'prop-types';

export const SpeachText = ({ speachText }) => {
  return (
    <div className={styles.speachTextContainer}>{speachText && speachText}</div>
  );
};

SpeachText.propTypes = {
  speachText: PropTypes.string.isRequired,
};
