import styles from './ResponseAi.module.css';
import PropTypes from 'prop-types';

export const ResponseAi = ({ response, loading }) => {
  return (
    <div className={styles.responseContainer}>
      {loading && 'loading ...'}
      {response && response}
    </div>
  );
};

ResponseAi.propTypes = {
  response: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
