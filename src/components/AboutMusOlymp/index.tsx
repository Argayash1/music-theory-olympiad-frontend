import React from 'react';
import styles from './AboutMusOlymp.module.scss';
import { OlympDataCardsContainer, SectionTitleContainer } from '../../components';

export const AboutMusOlymp = () => {
  return (
    <section className={styles.root} id='about-olymp'>
      <SectionTitleContainer text='Об олимпиаде' />
      <OlympDataCardsContainer />
    </section>
  );
};
