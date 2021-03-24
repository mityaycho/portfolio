import React from 'react';
import styles from './SocialContact.module.css';

const SocialContact = (props) => {
  return (
    <a className={styles.socialContact} href={props.link}>
      <img src={props.icon} alt=""/>
    </a>
  );
};

export default SocialContact;