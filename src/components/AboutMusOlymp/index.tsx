import React from 'react';
import styles from './AboutMusOlymp.module.scss';
import { OlympDataCardsContainer, SectionTitleContainer } from '../../components';

export const AboutMusOlymp = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className={styles.root} id='about-olymp' ref={ref}>
      <SectionTitleContainer text='Об олимпиаде' />
      <OlympDataCardsContainer />
    </section>
  );
});
