import React from 'react';
import styles from './Results.module.scss';
import { SectionTitleContainer } from '../SectionTitleContainer';
import { prepCardNames } from '../../utils/prepCardNames';
import { CTA } from '../CTA';
import { OLYMPIC_RULES_URL } from '../../utils/constants';

export const Results = () => {
  return (
    <section className={styles.root} id='results'>
      <div className={styles.container}>
        <SectionTitleContainer text='Результаты' />
        <ul className={styles.list}>
          {prepCardNames.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <p className={styles.text}>{item}</p>
              <CTA linkText='Скачать результаты' type='download' path={OLYMPIC_RULES_URL} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
