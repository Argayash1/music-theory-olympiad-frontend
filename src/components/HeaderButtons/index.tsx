import React from 'react';
import styles from './HeaderButtons.module.scss';
import { BurgerButton, CTA } from '../../components';
import { PARTICIPATION_URL, PAYMENT_URL } from '../../utils/constants';

type HeaderButtonsProps = {
  isBurgerMenuOpen: boolean;
  onToggleBurgerMenu: () => void;
};

export const HeaderButtons = ({ isBurgerMenuOpen, onToggleBurgerMenu }: HeaderButtonsProps) => {
  return (
    <ul className={styles.root}>
      <li className={styles.listItem}>
        <CTA path={PARTICIPATION_URL} />
      </li>
      <li className={styles.listItem}>
        <CTA linkText='Оплата' path={PAYMENT_URL} type='pay' />
      </li>
      <li className={styles.listItem}>
        <BurgerButton isOpen={isBurgerMenuOpen} onToggle={onToggleBurgerMenu} />
      </li>
    </ul>
  );
};
