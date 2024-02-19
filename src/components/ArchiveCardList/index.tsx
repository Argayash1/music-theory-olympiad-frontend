import React from 'react';
import styles from './ArchiveCardList.module.scss';
import { SliderNextButton } from '../SliderNextButton';
import { archiveCardNames } from '../../utils/archiveCardNames';
import { AdvertCard } from '../AdvertCard';

export const ArchiveCardList = () => {
  return (
    <div className={styles.root}>
      <SliderNextButton type='left' />
      <ul className={styles.list}>
        {archiveCardNames.map((item, index) => (
          <li key={index}>
            <AdvertCard title={item.itemName} extensions={item.extensions} />
          </li>
        ))}
      </ul>
      <SliderNextButton />
    </div>
  );
};
