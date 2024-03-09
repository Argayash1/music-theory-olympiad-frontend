import React from 'react';
import styles from './PrepCardItemContent.module.scss';
import { ItemDataType } from '../PrepCardItem';
import clsx from 'clsx';
import { PrepMaterialPopup } from '../PrepMaterialPopup';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveItemId } from '../../redux/prepMaterial/selectors';
import { setActiveItemId } from '../../redux/prepMaterial/slice';

type DictationsProps = {
  itemData: ItemDataType;
  isPlaying: boolean;
  onTogglePlay: (audioUrl: string) => void;
};

export const PrepCardItemContent = ({ itemData, isPlaying, onTogglePlay }: DictationsProps) => {
  const dispatch = useDispatch();
  const activeItemId = useSelector(selectActiveItemId);

  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const handleTogglePlayClick = (itemId: string, audioUrl: string) => {
    dispatch(setActiveItemId(itemId));
    onTogglePlay(audioUrl);
  };

  const handleSelect = (itemData: ItemDataType) => {
    if ('tableUrl' in itemData) {
      return (
        <div className={styles.root}>
          <button
            className={clsx(
              styles.playButton,
              activeItemId === itemData._id && isPlaying && styles.playButtonTypePause,
            )}
            onClick={() => handleTogglePlayClick(`${itemData._id}`, itemData.audioUrl)}
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
                className={clsx(
                  styles.playButton,
                  activeItemId === item._id && isPlaying && styles.playButtonTypePause,
                )}
                onClick={() => handleTogglePlayClick(item._id, item.audioUrl)}
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
