import React from 'react';
import styles from './Results.module.scss';
import { SectionTitleContainer } from '../SectionTitleContainer';
import { prepCardNames } from '../../utils/prepCardNames';
import { CTA } from '../CTA';

export const Results = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className={styles.root} id='results' ref={ref}>
      <div className={styles.container}>
        <SectionTitleContainer text='Результаты' />
        <ul className={styles.list}>
          {prepCardNames.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <p className={styles.text}>{item}</p>
              <CTA linkText='Скачать результаты' type='download' />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});
