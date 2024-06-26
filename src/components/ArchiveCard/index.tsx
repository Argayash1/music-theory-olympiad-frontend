import React from 'react';
import { DataCard, ExtensionCard, DownloadMenu } from '../../components';
import styles from './ArchiveCard.module.scss';
import clsx from 'clsx';
import { IArchiveObject } from '../../redux/archive/types';
import { useDispatch, useSelector } from 'react-redux';
import { selectArchiveIsMenuOpenData } from '../../redux/archive/selectors';
import { setIsMenuOpen } from '../../redux/archive/slice';

type ArchiveCardProps = {
  archiveCardData: IArchiveObject[];
  title: string;
  extensions: string[];
  itemIndex: number;
};

export const ArchiveCard = ({ archiveCardData, title, extensions, itemIndex }: ArchiveCardProps) => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectArchiveIsMenuOpenData);

  const extensionsLength = extensions.length;
  const extensionsItems = extensions.map((extension, index) => (
    <li key={index}>
      <ExtensionCard extension={extension} />
    </li>
  ));

  const isOpen = isMenuOpen.some((item) => item === itemIndex);

  const buttonLinks = archiveCardData.map((item) => item.link);

  return (
    <DataCard type='archive'>
      <h3 className={styles.title}>{title}</h3>
      <ul className={clsx(styles.list, itemIndex === 1 && styles.listMarginLeft21px)}>
        {extensionsLength > 1 ? extensionsItems : <ExtensionCard extension={extensions.join('')} type='single' />}
      </ul>
      <div className={clsx(styles.downloadBlock, isOpen && styles.downloadBlockIsOpened)}>
        <button
          className={clsx(styles.button, isOpen && styles.buttonBorderBottomNone)}
          onClick={() => dispatch(setIsMenuOpen(itemIndex))}
        >
          Загрузить
        </button>
        <DownloadMenu buttonLinks={buttonLinks} />
      </div>
    </DataCard>
  );
};
