import React from 'react';
import styles from './LogoContainer.module.scss';
import usccLogo from '../../assets/images/brand-bunner-usc-logo.jpeg';
import rrcLogo from '../../assets/images/brand-bunner-rrc-logo.jpeg';

export const LogoContainer = () => {
  return (
    <ul className={styles.root}>
      <li>
        <a href='https://www.uralconsv.org/' target='_blank' rel='noreferrer'>
          <img src={usccLogo} alt='Логотип УГК' className={styles.logoUsc} />
        </a>
      </li>
      <li>
        <a href='https://rrc-ural.ru/' target='_blank' rel='noreferrer'>
          <img src={rrcLogo} alt='Логотип РРЦ' className={styles.logoRrc} />
        </a>
      </li>
    </ul>
  );
};
