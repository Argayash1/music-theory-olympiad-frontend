import React from 'react';
import styles from './ArchiveTabs.module.scss';
import clsx from 'clsx';

type TabsProps = {
  value: number;
  onChangeTab: (index: number) => void;
};

const archiveTabNames = [2023, 2022, 2021];

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
