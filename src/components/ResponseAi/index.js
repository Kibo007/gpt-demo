import styles from './ResponseAi.module.css';

export const ResponseAi = ({ response }) => {
  return <div className={styles.responseContainer}>{response && response}</div>;
};
