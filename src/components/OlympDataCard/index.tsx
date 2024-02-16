import React from 'react';
import styles from './OlympDataCard.module.scss';
import clsx from 'clsx';

type OlympDataCardProps = {
  type?: string;
  children: React.ReactNode;
};

export const OlympDataCard = ({ type, children }: OlympDataCardProps) => {
  return <article className={clsx(styles.root, type === 'contacts' && styles.rootTypeContacts)}>{children}</article>;
};
