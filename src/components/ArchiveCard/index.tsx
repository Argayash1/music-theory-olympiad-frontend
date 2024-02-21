import React from 'react';
import { DataCard, ExtensionCard } from '../../components';
import styles from './ArchiveCard.module.scss';
import { DownloadMenu } from '../DownloadMenu';
import clsx from 'clsx';

type ArchiveCardProps = {
  title: string;
  extensions: string[];
};

export const ArchiveCard = ({ title, extensions }: ArchiveCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const extensionsLength = extensions.length;
  const extensionsItems = extensions.map((extension, index) => (
    <li key={index}>
      <ExtensionCard extension={extension} />
    </li>
  ));

  return (
    <DataCard type='archive'>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {extensionsLength > 1 ? extensionsItems : <ExtensionCard extension={extensions.join('')} type='single' />}
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
