import React from 'react';
import styles from './HeaderButtons.module.scss';
import { CTA } from '../../components';
import { PARTICIPATION_URL, PAYMENT_URL } from '../../utils/constants';

export const HeaderButtons = () => {
  return (
    <ul className={styles.root}>
      <li>
        <CTA path={PARTICIPATION_URL} />
      </li>
      <li>
        <CTA linkText='Оплата' path={PAYMENT_URL} type='pay' />
      </li>
    </ul>
  );
};
