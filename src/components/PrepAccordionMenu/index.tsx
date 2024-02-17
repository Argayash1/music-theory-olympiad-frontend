import React from 'react';
import styles from './PrepAccordionMenu.module.scss';
import { prepCardNames } from '../../utils/prepCardNames';
import { PrepCard } from '../../components';

export const PrepAccordionMenu = () => {
  return (
    <ul className={styles.root}>
      {prepCardNames.map((item, index) => (
        <li key={index}>
          <PrepCard title={item} />
        </li>
      ))}
    </ul>
  );
};
