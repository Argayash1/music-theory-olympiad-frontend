import React from 'react';
import styles from './Adverts.module.scss';
import { SectionTitleContainer, AdvertCardList, FullAdvert } from '../../components';

export const Adverts = () => {
  return (
    <section className={styles.root} id='adverts'>
      <SectionTitleContainer text='Объявления' />
      <AdvertCardList />
      <FullAdvert />
    </section>
  );
};
