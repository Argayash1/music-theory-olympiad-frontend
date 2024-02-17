import React from 'react';
import { menuItems } from '../../utils/menuItems';
import styles from './MainMenu.module.scss';

export const MainMenu = () => {
  const menuListItems = menuItems.map((item, index) => (
    <li key={index}>
      <a href={`#${item.path}`} className={styles.link}>
        {item.name}
      </a>
    </li>
  ));

  return (
    <nav className={styles.root}>
      <ul className={styles.list}>{menuListItems}</ul>
    </nav>
  );
};
