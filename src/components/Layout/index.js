import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  return <div className={styles.layoutContainer}>{children}</div>;
};

export const Row = ({ children }) => {
  return <div className={styles.rowContainer}>{children}</div>;
};
