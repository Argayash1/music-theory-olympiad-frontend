import React from 'react';
import styles from './SectionTitle.module.scss';
import clsx from 'clsx';

type SectionTitleProps = {
  text: string;
};

export const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
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
  );
};
