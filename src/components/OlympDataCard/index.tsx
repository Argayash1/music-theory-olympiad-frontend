import React from 'react';
import styles from './OlympDataCard.module.scss';

type OlympDataCardProps = {
  children: React.ReactNode;
};

export const OlympDataCard = ({ children }: OlympDataCardProps) => {
  return <article className={styles.root}>{children}</article>;
};
