import React from 'react';
import logo from '../../assets/images/logo.png';
import styles from './Logo.module.scss';
import clsx from 'clsx';

type LogoProps = {
  place?: string;
};

export const Logo = ({ place }: LogoProps) => {
  return (
    <a href='#top' className={clsx(styles.root, place === 'brand-bunner' && styles.rootTypeBrandBanner)}>
      <img
        src={logo}
        alt='Логотип олимпиады'
        className={clsx(styles.image, place === 'brand-bunner' && styles.imageTypeBrandBunner)}
      />
    </a>
  );
};
