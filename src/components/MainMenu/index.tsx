import React from 'react';
import { menuItems } from '../../utils/menuItems';
import styles from './MainMenu.module.scss';
import clsx from 'clsx';
import { HeaderButtons } from '../HeaderButtons';

type MainMenuProps = {
  type?: string;
  activeSection?: string;
  isOpen?: boolean;
};

export const MainMenu = ({ type, activeSection, isOpen }: MainMenuProps) => {
  const menuListItems = menuItems.map((item, index) => (
    <li key={index}>
      <a
        href={`#${item.path}`}
        className={clsx(
          styles.link,
          activeSection === item.path && styles.linkActive,
          type === 'footer' && styles.linkTypeFooter,
          type === 'burger' && styles.linkTypeBurger,
          type === 'burger' && activeSection === item.path && styles.linkTypeBurgerActive,
        )}
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <>
      {type === 'burger' ? (
        <aside className={clsx(styles.root, styles.rootTypeBurger, isOpen && styles.rootIsOpened)}>
          <nav>
            <ul className={clsx(styles.list, styles.listTypeBurger)}>{menuListItems}</ul>
          </nav>
          <HeaderButtons />
        </aside>
      ) : (
        <nav className={clsx(styles.root, type === 'footer' && styles.rootTypeFooter)}>
          <ul className={styles.list}>{menuListItems}</ul>
        </nav>
      )}
    </>
  );
};
