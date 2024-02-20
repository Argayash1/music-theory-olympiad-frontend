import React from 'react';
import { DataCard } from '../../components';
import styles from './ArchiveCard.module.scss';
import { DownloadMenu } from '../DownloadMenu';
import clsx from 'clsx';

type ArchiveCardProps = {
  title: string;
  extensions: string[];
};

export const ArchiveCard = ({ title, extensions }: ArchiveCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  return (
    <DataCard type='archive'>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {extensions.map((extension, index) => (
          <li key={index} className={styles.listItem}>
            <div className={styles.listItemIcon}></div>
            <span className={styles.listItemSpan}>{extension}</span>
          </li>
        ))}
      </ul>
      <button
        className={clsx(styles.button, isMenuOpen && styles.buttonBorderBottomNone)}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Загрузить
      </button>
      <DownloadMenu isOpen={isMenuOpen} />
    </DataCard>
  );
};
