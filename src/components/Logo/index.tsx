import React from 'react';
import logo from '../../assets/images/logo.png';
import styles from './Logo.module.scss';
import clsx from 'clsx';

type LogoProps = {
  place?: string;
};

export const Logo = ({ place }: LogoProps) => {
  return (
    <>
      {!place ? (
        <a href='#top' className={styles.root}>
          <img src={logo} alt='Логотип олимпиады' className={styles.image} />
        </a>
      ) : (
        <div className={clsx(styles.root, styles.rootTypeBrandBanner)}>
          <img src={logo} alt='Логотип олимпиады' className={clsx(styles.image, styles.imageTypeBrandBunner)} />
        </div>
      )}
    </>
  );
};
