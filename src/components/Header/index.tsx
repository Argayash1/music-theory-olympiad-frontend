import React from 'react';
import styles from './Header.module.scss';
import { MainMenu, HeaderButtons } from '../../components';

export const Header = () => {
  return (
    <header className={styles.root}>
      <MainMenu />
      <HeaderButtons />
    </header>
  );
};
