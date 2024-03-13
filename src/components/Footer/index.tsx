import React from 'react';
import styles from './Footer.module.scss';
import { MainMenu } from '../MainMenu';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <p className={styles.author}>
            &copy; А. Ростовская, <br /> Я. Зильберман {new Date().getFullYear()}
          </p>
          <MainMenu type='footer' />
        </div>
        <div className={styles.contactsContainer}>
          <p className={styles.contactsTitle}>Контакты:</p>
          <ul className={styles.contactList}>
            <li>
              Мешкова Анна Сергеевна <br />
              организационные вопросы{' '}
              <a href='mailto: olimp-uralcons@yandex.ru' className={styles.contactLink}>
                olimp-uralcons@yandex.ru
              </a>
            </li>
            <li>
              Шитякова Анастасия Александровна <br />
              вопросы оплаты{' '}
              <a href='mailto: mail@rrc-ural.ru ' className={styles.contactLink}>
                mail@rrc-ural.ru
              </a>
              ;{' '}
              <a href='tel: +7 (343) 372-79-70' className={styles.contactLink}>
                (343) 372-79-70
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
