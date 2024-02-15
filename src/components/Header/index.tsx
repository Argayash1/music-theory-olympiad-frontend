import React from 'react';
import styles from './Header.module.scss';
import { MainMenu, HeaderButtons, Logo } from '../../components';

export const Header = () => {
  return (
    <header className={styles.root}>
      <Logo />
      <MainMenu />
      <HeaderButtons />
    </header>
  );
};
