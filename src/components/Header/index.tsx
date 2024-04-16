import React from 'react';
import styles from './Header.module.scss';
import { MainMenu, HeaderButtons, Logo, BurgerMenu } from '../../components';
import { ScrollToTopButton } from '../ScrollToTopButton';
import { selectAudioItemData } from '../../redux/audio/selectors';
import { useSelector } from 'react-redux';

type HeaderProps = {
  activeSection: string;
};

export const Header = ({ activeSection }: HeaderProps) => {
  const audioItem = useSelector(selectAudioItemData);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  React.useEffect(() => {
    function handleAutoCloseMenu() {
      window.onresize = () => {
        setIsBurgerMenuOpen(false);
      };
    }

    if (isBurgerMenuOpen) {
      window.addEventListener('resize', handleAutoCloseMenu);
      return () => window.removeEventListener('resize', handleAutoCloseMenu);
    }
  }, [isBurgerMenuOpen]);

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
      <ScrollToTopButton activeSection={activeSection} isPlayerOpen={!!audioItem.audioUrl} />
      <BurgerMenu isOpen={isBurgerMenuOpen} onClose={() => setIsBurgerMenuOpen(false)} activeSection={activeSection} />
    </header>
  );
};
