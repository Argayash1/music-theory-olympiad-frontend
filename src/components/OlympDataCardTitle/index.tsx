import React from 'react';
import styles from './OlympDataCardTitle.module.scss';
import clsx from 'clsx';

type OlymDataCardTitlePrrops = {
  title: string;
};

export const OlympDataCardTitle = ({ title }: OlymDataCardTitlePrrops) => {
  return <h3 className={clsx(styles.root, title === 'Контакты' && styles.rootWithPadding)}>{title}</h3>;
};
