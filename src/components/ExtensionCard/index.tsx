import React from 'react';
import styles from './ExtensionCard.module.scss';
import clsx from 'clsx';

type ExtensionCardProps = {
  extension: string;
  type?: string;
};

export const ExtensionCard = ({ extension, type }: ExtensionCardProps) => {
  return (
    <article className={clsx(styles.root, type === 'single' && styles.rootCentered)}>
      <div className={styles.rootIcon}></div>
      <span className={styles.rootSpan}>{extension}</span>
    </article>
  );
};
