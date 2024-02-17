import React from 'react';
import styles from './AdvertCardList.module.scss';
import { AdvertCard, SliderNextButton } from '../../components';
import { cards } from '../../utils/constants';

export const AdvertCardList = () => {
  return (
    <div className={styles.root}>
      <SliderNextButton type='left' />
      <ul className={styles.list}>
        {cards.map((item) => (
          <li key={item._id}>
            <AdvertCard {...item} />
          </li>
        ))}
      </ul>
      <SliderNextButton />
    </div>
  );
};
