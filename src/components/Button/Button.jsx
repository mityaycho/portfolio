import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className={styles.button} onClick={props.onClickForm}>{props.titleButton}</button>
  );
};

export default Button;