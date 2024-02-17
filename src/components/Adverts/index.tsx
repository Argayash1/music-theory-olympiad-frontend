import React from 'react';
import styles from './Adverts.module.scss';
import { SectionTitleContainer, AdvertCardList } from '../../components';

export const Adverts = () => {
  return (
    <section className={styles.root} id='announcements'>
      <SectionTitleContainer text='Объявления' />
      <AdvertCardList />
    </section>
  );
};
