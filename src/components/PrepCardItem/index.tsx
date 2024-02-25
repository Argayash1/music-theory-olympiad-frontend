import React from 'react';
import styles from './PrepCardItem.module.scss';
import { CTA, PrepCardItemContent } from '../../components';
import clsx from 'clsx';

export interface IDictation {
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
};

export const PrepCardItem = ({ itemName, itemButtonText, itemData }: PrepCardItemProps) => {
  let buttonUrl = '';

  if ('scoreUrl' in itemData) {
    buttonUrl = itemData.scoreUrl;
  } else {
    buttonUrl = itemData.tableUrl;
  }

  return (
    <div className={styles.root}>
      <h4 className={styles.title}>{itemName}</h4>
      <PrepCardItemContent itemData={itemData} />
      <CTA linkText={itemButtonText} type='download' path={buttonUrl} />
    </div>
  );
};
