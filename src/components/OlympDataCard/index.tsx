import React from 'react';
import styles from './OlympDataCard.module.scss';
import clsx from 'clsx';

type OlympDataCardProps = {
  children: React.ReactNode;
  type?: string;
};

export const OlympDataCard = ({ children, type }: OlympDataCardProps) => {
  return <article className={clsx(styles.root, type === 'contacts' && styles.rootTypeContacts)}>{children}</article>;
};
