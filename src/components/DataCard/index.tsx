import React from 'react';
import styles from './DataCard.module.scss';
import clsx from 'clsx';

type DataCardProps = {
  type?: string;
  children: React.ReactNode;
  isCardExpanded?: boolean;
};

export const DataCard = ({ type, children, isCardExpanded }: DataCardProps) => {
  return (
    <article
      className={clsx(styles.root, type === 'archive' && styles.rootBgGrey, isCardExpanded && styles.rootTypeFullText)}
    >
      {children}
    </article>
  );
};
