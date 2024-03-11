import React from 'react';
import styles from './PrepCardItem.module.scss';
import { CTA, PrepCardItemContent } from '../../components';

export interface IDictation {
  _id: string;
  audioUrl: string;
  title: string;
  author: string;
}

interface IDictationsData {
  scoreUrl: string;
  data: IDictation[];
}

export interface ISoundAnalysis extends IDictation {
  tableUrl: string;
  imageUrl: string;
}

interface IHarmAndSolfData {
  imageUrl: string;
  scoreUrl: string;
}

export type ItemDataType = IHarmAndSolfData | IDictationsData | ISoundAnalysis;

type PrepCardItemProps = {
  itemName: string;
  itemButtonText: string;
  itemData: ItemDataType;
  isPlaying: boolean;
  onTogglePlay: (audioUrl: string, title: string, author: string) => void;
};

export const PrepCardItem = ({ itemName, itemButtonText, itemData, isPlaying, onTogglePlay }: PrepCardItemProps) => {
  let buttonUrl = '';

  if ('scoreUrl' in itemData) {
    buttonUrl = itemData.scoreUrl;
  } else {
    buttonUrl = itemData.tableUrl;
  }

  return (
    <div className={styles.root}>
      <h4 className={styles.title}>{itemName}</h4>
      <PrepCardItemContent itemData={itemData} isPlaying={isPlaying} onTogglePlay={onTogglePlay} />
      <CTA linkText={itemButtonText} type='download' path={buttonUrl} />
    </div>
  );
};
