import React from 'react';
import styles from './SectionTitle.module.scss';
import clsx from 'clsx';

type SectionTitleProps = {
  text: string;
};

export const SectionTitle = ({ text }: SectionTitleProps) => {
  return <h2 className={clsx(styles.title, text === 'Результаты' && styles.titleTypeResults)}>{text}</h2>;
};
