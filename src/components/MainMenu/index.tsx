import React from 'react';
import { menuItems } from '../../utils/menuItems';
import styles from './MainMenu.module.scss';

export const MainMenu = () => {
  const menuListItems = menuItems.map((item, index) => <li key={index}>{item}</li>);

  return (
    <nav>
      <ul className={styles.list}>{menuListItems}</ul>
    </nav>
  );
};
