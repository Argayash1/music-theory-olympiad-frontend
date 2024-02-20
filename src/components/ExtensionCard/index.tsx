import React from 'react';
import styles from './ExtensionCard.module.scss';

type ExtensionCardProps = {
  extension: string;
};

export const ExtensionCard = ({ extension }: ExtensionCardProps) => {
  return (
    <article className={styles.root}>
      <div className={styles.rootIcon}></div>
      <span className={styles.rootSpan}>{extension}</span>
    </article>
  );
};
