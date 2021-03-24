import React from 'react';
import styles from './Project.module.css';

const Project = (props) => {
  return (
    <div className={styles.project}>
      <div className={styles.projectBlock}>
        <a className={styles.blockPhoto} data-title="Watch me ;)" href={props.link}>
          <img src={props.src} alt=""/>
        </a>
        <div className={styles.blockInfo}>
          <h3>{props.titleProject}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;