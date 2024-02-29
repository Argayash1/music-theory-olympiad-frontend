import React from 'react';
import styles from './Header.module.scss';
import { MainMenu, HeaderButtons, Logo } from '../../components';

type HeaderProps = {
  activeSection: string;
};

export const Header = ({ activeSection }: HeaderProps) => {
  return (
    <header className={styles.root} id='header'>
      <div className={styles.container}>
        <Logo />
        <MainMenu activeSection={activeSection} />
        <HeaderButtons />
      </div>
    </header>
  );
};
