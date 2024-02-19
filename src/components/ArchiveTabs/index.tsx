import React from 'react';
import styles from './ArchiveTabs.module.scss';
import { archiveTabNames } from '../../utils/archiveTabNames';
import clsx from 'clsx';

type TabsProps = {
  value: number;
  onChangeTab: (index: number) => void;
};

export const ArchiveTabs = ({ value, onChangeTab }: TabsProps) => {
  return (
    <ul className={styles.root}>
      {archiveTabNames.map((item, index) => (
        <li key={index}>
          <button
            className={clsx(styles.button, value === index && styles.buttonActive)}
            onClick={() => onChangeTab(index)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};
