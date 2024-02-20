import React from 'react';
import styles from './ArchiveCardList.module.scss';
import { SliderNextButton } from '../SliderNextButton';
import { archiveCardNames } from '../../utils/archiveCardNames';
import { ArchiveCard } from '../ArchiveCard';

export const ArchiveCardList = () => {
  return (
    <div className={styles.root}>
      <SliderNextButton type='left' />
      <ul className={styles.list}>
        {archiveCardNames.map((item, index) => (
          <li key={index}>
            <ArchiveCard title={item.itemName} extensions={item.extensions} />
          </li>
        ))}
      </ul>
      <SliderNextButton />
    </div>
  );
};
