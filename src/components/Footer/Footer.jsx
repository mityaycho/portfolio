import React from 'react';
import styles from './Footer.module.css';
import SocialContact from '../SocialContact/SocialContact';
import github from '../../img/github.png';
import gMail from '../../img/gmail.png';
import telegram from '../../img/telegram.png';
import facebook from '../../img/facebook.png';
import hh from '../../img/icon_hh.png';
import BlockTitle from '../Blocktitle/BlockTitle';


const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.container}>
        <BlockTitle title="My contacts" />
        <div className={styles.socialBlock}>
          <SocialContact icon={hh} link="https://hh.ru/resume/c4056a72ff063ec6320039ed1f754b4f7a454e" />
          <SocialContact icon={github} link="https://www.github.com/mityaycho" />
          <SocialContact icon={gMail} link="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=GTvVlcSGMSwpQMQKlMCLTpVcJtkZhXNTZbNkSPrmTjFWFqXjQdxNtMkVfzPwBtjSFxCqMGNwtwTTk" />
          <SocialContact icon={telegram} link="https://t.me/mityaycho" />
          <SocialContact icon={facebook} link="https://www.facebook.com/profile.php?id=100017144049054" />
        </div>
        <small>© <time dateTime="2019">2019</time> All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;