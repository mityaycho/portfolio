import React from 'react';
import styles from './BlockTitle.module.css';

const BlockTitle = (props) => {
  return (
    <div className={styles.blockTitle}>
      <h2 className={`${styles.title} animated heartBeat`}>{props.title}</h2>
      <div className={styles.line}></div>
    </div>
  );
};

export default BlockTitle;