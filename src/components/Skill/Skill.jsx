import React from 'react';
import styles from './Skill.module.css';

const Skill = (props) => {
  return (
    <div className={styles.skill} onClick={props.changeSkill} data-value={props.title}>
      <div className={styles.icon}>
        <img src={props.icon} alt=""/>
      </div>
      <h1 className={styles.skillTitle}>{props.title}</h1>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
};

export default Skill;