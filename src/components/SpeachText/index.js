import styles from './Layout.module.css';

export const SpeachText = ({ speachText }) => {
  return (
    <div className={styles.speachTextContainer}>{speachText && speachText}</div>
  );
};
