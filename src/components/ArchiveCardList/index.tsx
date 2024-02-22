import React from 'react';
import styles from './ArchiveCardList.module.scss';
import { SliderNextButton } from '../SliderNextButton';
import { archiveCardNames } from '../../utils/archiveCardNames';
import { ArchiveCard } from '../ArchiveCard';

export const ArchiveCardList = () => {
  const archiveCards = archiveCardNames.map((item, index) => (
    <li key={index}>
      <ArchiveCard title={item.itemName} extensions={item.extensions} />
    </li>
  ));

  return (
    <div className={styles.root}>
      <SliderNextButton type='left' />
      <ul className={styles.list}>{archiveCards}</ul>
      <SliderNextButton />
    </div>
  );
};
