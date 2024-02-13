import React from 'react';
import styles from './HeaderButtons.module.scss';
import { CTA } from '../../components';

export const HeaderButtons = () => {
  return (
    <ul className={styles.root}>
      <li>
        <CTA
          linkText='Участвовать'
          path='https://docs.google.com/forms/d/e/1FAIpQLSf9TSakRFx8GSTfv1A53a4aQjkR-CW6NDznfeEhQQ-mgn8VOw/viewform'
        />
      </li>
      <li>
        <CTA
          linkText='Оплата'
          path='https://rrc-ural.ru/konkursy/item/1412-iv-vserossijskaya-olimpiada-po-muzykalno-teoreticheskim-predmetam-im-z-a-vizelya'
          type='pay'
        />
      </li>
    </ul>
  );
};
