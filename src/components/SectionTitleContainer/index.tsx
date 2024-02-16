import React from 'react';
import { handleScrollToTop } from '../../utils/utils';
import styles from './SectionTitleContainer.module.scss';

type SectionTitleContainerProps = {
  text: string;
};

export const SectionTitleContainer = ({ text }: SectionTitleContainerProps) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{text}</h2>
      <a href='#start' className={styles.button}>
        a
      </a>
    </div>
  );
};
