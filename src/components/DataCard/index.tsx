import React from 'react';
import styles from './DataCard.module.scss';
import clsx from 'clsx';

type DataCardProps = {
  type?: string;
  children: React.ReactNode;
};

export const DataCard = ({ type, children }: DataCardProps) => {
  return <article className={clsx(styles.root, type === 'archive' && styles.rootBgGrey)}>{children}</article>;
};
