import React from 'react';
import styles from './LogoContainer.module.scss';
import usccLogo from '../../assets/images/brand-bunner-usc-logo.jpeg';
import rrcLogo from '../../assets/images/brand-bunner-rrc-logo.jpeg';

export const LogoContainer = () => {
  return (
    <ul className={styles.root}>
      <li>
        <img src={usccLogo} alt='Логотип УГК' className={styles.logoUsc} />
      </li>
      <li>
        <img src={rrcLogo} alt='Логотип РРЦ' className={styles.logoRrc} />
      </li>
    </ul>
  );
};
