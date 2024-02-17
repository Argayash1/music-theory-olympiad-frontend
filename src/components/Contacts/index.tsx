import React from 'react';
import { CTA, OlympDataCardTitle } from '../../components';
import styles from './Contacts.module.scss';
import clsx from 'clsx';
import { OLYMPIC_RULES_URL, PAYMENT_URL } from '../../utils/constants';

export const Contacts = () => {
  return (
    <div className={styles.root}>
      <OlympDataCardTitle title='Контакты' />
      <ul className={styles.contactList}>
        <li className={styles.contactListItem}>
          <h4 className={styles.contactTitle}>Мешкова Анна Сергеевна</h4>
          <p className={styles.contactSubtitle}>организационные вопросы</p>
          <a href='mailto: olimp-uralcons@yandex.ru' className={styles.contactLink}>
            <div className={styles.contactMailIcon}></div>olimp-uralcons@yandex.ru
          </a>
        </li>
        <li className={styles.contactListItem}>
          <h4 className={styles.contactTitle}>Шитякова Анастасия Александровна</h4>
          <p className={styles.contactSubtitle}>вопросы оплаты</p>
          <a href='tel: (343) 372-79-70' className={clsx(styles.contactLink, styles.contactLinkWithMarginBottom)}>
            <div className={styles.contactTelIcon}></div>(343) 372-79-70
          </a>
          <a href='mailto: mail@rrc-ural.ru' className={styles.contactLink}>
            <div className={styles.contactMailIcon}></div>mail@rrc-ural.ru
          </a>
        </li>
      </ul>
      <ul className={styles.buttonList}>
        <li>
          <CTA type='pay' linkText='Оплатить картой' path={PAYMENT_URL} />
        </li>
        <li>
          <CTA linkText='Положение олимпиады' type='download' path={OLYMPIC_RULES_URL} />
        </li>
      </ul>
    </div>
  );
};
