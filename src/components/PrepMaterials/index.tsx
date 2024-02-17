import React from 'react';
import styles from './PrepMaterials.module.scss';
import { PrepAccordionMenu, SectionTitleContainer } from '../../components';

export const PrepMaterials = () => {
  return (
    <section className={styles.root} id='prep-materials'>
      <SectionTitleContainer text='Материалы для подготовки' />
      <PrepAccordionMenu />
    </section>
  );
};
