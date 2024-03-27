import React from 'react';
import styles from './Header.module.scss';
import { MainMenu, HeaderButtons, Logo, BurgerMenu } from '../../components';
import { ScrollToTopButton } from '../ScrollToTopButton';

type HeaderProps = {
  activeSection: string;
};

export const Header = ({ activeSection }: HeaderProps) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  return (
    <header className={styles.root} id='header'>
      <div className={styles.container}>
        <Logo />
        <MainMenu activeSection={activeSection} />
        <HeaderButtons
          isBurgerMenuOpen={isBurgerMenuOpen}
          onToggleBurgerMenu={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        />
      </div>
      <ScrollToTopButton activeSection={activeSection} />
      <BurgerMenu isOpen={isBurgerMenuOpen} onClose={() => setIsBurgerMenuOpen(false)} activeSection={activeSection} />
    </header>
  );
};
