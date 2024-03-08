import React from 'react';
import styles from './AdvertCard.module.scss';
import { CTA, DataCard } from '../../components';
import { handleFormateDate } from '../../utils/utils';

type AdvertCardProps = {
  _id: string;
  createdAt: string;
  title: string;
  content: string;
  onCtaClick: (cardId: string) => void;
};

export const AdvertCard = ({ _id, createdAt, title, content, onCtaClick }: AdvertCardProps) => {
  return (
    <DataCard>
      <span className={styles.date}>{handleFormateDate(createdAt)}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{content}</p>
      <CTA linkText='Узнать больше' type='learn' onClick={() => onCtaClick(_id)} />
    </DataCard>
  );
};
