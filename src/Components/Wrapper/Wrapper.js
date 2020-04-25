import React from 'react';
import styles from './styles.module.sass';

const Wrapper = ({ children }) => {
   return <div className={styles.Wrapper}>{children}</div>;
};

export default Wrapper;
