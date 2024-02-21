import React from 'react';
import styles from './AdvertCard.module.scss';
import { CTA, DataCard } from '../../components';

type AdvertCardProps = {
  _id?: number;
  createdAt?: string;
  title: string;
  content?: string;
};

export const AdvertCard = ({ _id, createdAt, title, content }: AdvertCardProps) => {
  return (
    <DataCard>
      <span className={styles.date}>{createdAt}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{content}</p>
      <CTA linkText='Узнать больше' type='learn' />
    </DataCard>
  );
};
