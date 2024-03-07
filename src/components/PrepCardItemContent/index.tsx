import React from 'react';
import styles from './PrepCardItemContent.module.scss';
import { ItemDataType } from '../PrepCardItem';
import clsx from 'clsx';
import { PrepMaterialPopup } from '../PrepMaterialPopup';

type DictationsProps = {
  itemData: ItemDataType;
  isPlaying: boolean;
  onTogglePlay: (audioUrl: string) => void;
};

export const PrepCardItemContent = ({ itemData, isPlaying, onTogglePlay }: DictationsProps) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const handleSelect = (itemData: ItemDataType) => {
    if ('tableUrl' in itemData) {
      return (
        <div className={styles.root}>
          <button
            className={clsx(styles.playButton, isPlaying && styles.playButtonTypePause)}
            onClick={() => onTogglePlay(itemData.audioUrl)}
          ></button>
          <p className={styles.text}>{itemData.author}</p>
          <p className={styles.text}>{itemData.title}</p>
          <img
            src={itemData.imageUrl}
            alt=''
            className={styles.tableImage}
            onClick={() => dialogRef.current?.showModal()}
          />
          <PrepMaterialPopup ref={dialogRef} imageUrl={itemData.imageUrl} onClose={() => dialogRef.current?.close()} />
        </div>
      );
    } else if ('data' in itemData) {
      return (
        <ul className={clsx(styles.root, styles.rootTypeList)}>
          {itemData.data.map((item, index) => (
            <li key={index}>
              <button
                className={clsx(styles.playButton, isPlaying && styles.playButtonTypePause)}
                onClick={() => onTogglePlay(item.audioUrl)}
              ></button>
              <p className={styles.text}>{item.author}</p>
              <p className={styles.text}>{item.title}</p>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <div className={styles.root}>
          <img
            src={itemData.imageUrl}
            alt=''
            className={styles.scoreImage}
            onClick={() => dialogRef.current?.showModal()}
            aria-controls='dialog-id'
          />
          <PrepMaterialPopup ref={dialogRef} imageUrl={itemData.imageUrl} onClose={() => dialogRef.current?.close()} />
        </div>
      );
    }
  };

  return handleSelect(itemData);
};
