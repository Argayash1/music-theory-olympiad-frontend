import React from 'react';
import styles from './Announcements.module.scss';
import { SectionTitleContainer } from '../SectionTitleContainer';

export const Announcements = () => {
  return (
    <section className={styles.root} id='announcements'>
      <SectionTitleContainer text='Объявления' />
    </section>
  );
};
