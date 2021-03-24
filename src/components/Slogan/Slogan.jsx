import React from 'react';
import styles from './Slogan.module.css';
import Button from '../Button/Button';
import BlockTitle from '../Blocktitle/BlockTitle';

const Slogan = () => {
  return (
    <article className={styles.slogan}>
      <div className={styles.container}>
        <BlockTitle title="I'm also looking for remote job" />
        <a href="https://hh.ru/resume/c4056a72ff063ec6320039ed1f754b4f7a454e">
          <Button titleButton="to hire me" />
        </a>
      </div>
    </article>
  );
};

export default Slogan;