import React from 'react';
import styles from './AdvertCard.module.scss';
import { CTA, DataCard, TextWithCustomLink } from '../../components';
import { handleFormateDate } from '../../utils/utils';

type AdvertCardProps = {
  _id: string;
  createdAt: string;
  title: string;
  content: string;
  linkText?: string;
  linkUrl?: string;
  onCtaClick: (cardId: string) => void;
};

export const AdvertCard = ({ _id, createdAt, title, content, linkText, linkUrl, onCtaClick }: AdvertCardProps) => {
  return (
    <DataCard>
      <span className={styles.date}>{handleFormateDate(createdAt)}</span>
      <h3 className={styles.title}>{title}</h3>
      {linkText && linkUrl ? (
        <TextWithCustomLink text={content} linkText={linkText} linkUrl={linkUrl} />
      ) : (
        <p className={styles.text}>{content}</p>
      )}
      <CTA linkText='Узнать больше' type='learn' onClick={() => onCtaClick(_id)} />
    </DataCard>
  );
};
