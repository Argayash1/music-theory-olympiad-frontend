import React from 'react';
import styles from './Footer.module.scss';
import { MainMenu } from '../MainMenu';
import clsx from 'clsx';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <p className={styles.columnTitle}>Меню:</p>
          <MainMenu type='footer' />
          <p className={styles.author}>&copy; А. Ростовская, Я.&nbsp;Зильберман&nbsp;{new Date().getFullYear()}</p>
        </div>
        <div className={styles.contactsContainer}>
          <p className={styles.columnTitle}>Контакты:</p>
          <ul className={styles.contactList}>
            <li className={styles.contactListItem}>
              Мешкова Анна Сергеевна <br />
              организационные вопросы{' '}
              <a href='mailto: olimp-uralcons@yandex.ru' className={styles.contactLink}>
                olimp-uralcons@yandex.ru
              </a>
            </li>
            <li className={styles.contactListItem}>
              Шитякова Анастасия Александровна <br />
              вопросы оплаты{' '}
              <div className={styles.contactLinks}>
                <a href='mailto: mail@rrc-ural.ru ' className={styles.contactLink}>
                  mail@rrc-ural.ru
                </a>
                ;{' '}
                <a href='tel: +7 (343) 372-79-70' className={styles.contactLink}>
                  (343) 372-79-70
                </a>
              </div>
            </li>
          </ul>
        </div>
        <p className={clsx(styles.author, styles.authorTypeBottom)}>
          &copy; А. Ростовская, Я.&nbsp;Зильберман&nbsp;{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
