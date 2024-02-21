import React from 'react';
import styles from './SectionTitleContainer.module.scss';
import clsx from 'clsx';
import { ScrollToTopButton } from '../ScrollToTopButton';

type SectionTitleContainerProps = {
  text: string;
};

export const SectionTitleContainer = ({ text }: SectionTitleContainerProps) => {
  return (
    <div className={clsx(styles.root, text === 'Жюри' && styles.rootTypeJury)}>
      <ScrollToTopButton />
      <h2
        className={clsx(
          styles.title,
          text === 'Материалы для подготовки' && styles.titleTypePrepMaterials,
          text === 'Архив' && styles.titleTypeArchive,
          text === 'Результаты' && styles.titleTypeResults,
          text === 'Жюри' && styles.titleTypeJury,
        )}
      >
        {text}
      </h2>
    </div>
  );
};
