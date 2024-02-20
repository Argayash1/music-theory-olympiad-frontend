import React from 'react';
import styles from './OlympDataCardTitle.module.scss';

type OlymDataCardTitlePrrops = {
  title: string;
};

export const OlympDataCardTitle = ({ title }: OlymDataCardTitlePrrops) => {
  return <h3 className={styles.root}>{title}</h3>;
};
