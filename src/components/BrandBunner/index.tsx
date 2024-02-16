import React from 'react';
import { CTA, Logo, LogoContainer, MainInfo } from '../../components';
import styles from './BrandBunner.module.scss';

export const BrandBunner = () => {
  return (
    <section className={styles.root}>
      <LogoContainer />
      <div className={styles.mainContainer}>
        <h1 className={styles.pageTitle}>
          IV Всероссийская <span className={styles.pageTitleSpan}>олимпиада</span> по музыкально-теоретическим предметам
          им. З. А. Визеля
        </h1>
        <MainInfo />
        <CTA
          path='https://docs.google.com/forms/d/e/1FAIpQLSf9TSakRFx8GSTfv1A53a4aQjkR-CW6NDznfeEhQQ-mgn8VOw/viewform'
          type='brand-bunner'
        />
        <Logo place='brand-bunner' />
      </div>
    </section>
  );
};
