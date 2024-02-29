import React from 'react';
import styles from './PrepMaterials.module.scss';
import { PrepAccordionMenu, SectionTitleContainer } from '../../components';

export const PrepMaterials = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className={styles.root} id='prep-materials' ref={ref}>
      <SectionTitleContainer text='Материалы для подготовки' />
      <PrepAccordionMenu />
    </section>
  );
});
