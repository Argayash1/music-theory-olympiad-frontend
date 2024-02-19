import React from 'react';
import { menuItems } from '../../utils/menuItems';
import styles from './MainMenu.module.scss';
import clsx from 'clsx';

type MainMenuProps = {
  type?: string;
};

export const MainMenu = ({ type }: MainMenuProps) => {
  const menuListItems = menuItems.map((item, index) => (
    <li key={index}>
      <a href={`#${item.path}`} className={clsx(styles.link, type === 'footer' && styles.linkTypeFooter)}>
        {item.name}
      </a>
    </li>
  ));

  return (
    <nav className={clsx(styles.root, type === 'footer' && styles.rootTypeFooter)}>
      <ul className={clsx(styles.list, type === 'footer' && styles.listTypeFooter)}>{menuListItems}</ul>
    </nav>
  );
};
