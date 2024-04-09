import React from 'react';
import styles from './AdvertCard.module.scss';
import { CTA, DataCard, TextWithCustomLinks } from '../../components';
import { handleFormateDate } from '../../utils/utils';
import { LinkData } from '../../redux/advert/types';

type AdvertCardProps = {
  _id: string;
  createdAt: string;
  title: string;
  content: string;
  links: LinkData[];
  onCtaClick: (cardId: string) => void;
};

export const AdvertCard = ({ _id, createdAt, title, content, links, onCtaClick }: AdvertCardProps) => {
  return (
    <DataCard>
      <span className={styles.date}>{handleFormateDate(createdAt)}</span>
      <h3 className={styles.title}>{title}</h3>
      {links ? <TextWithCustomLinks text={content} links={links} /> : <p className={styles.text}>{content}</p>}
      <CTA linkText='Узнать больше' type='learn' onClick={() => onCtaClick(_id)} />
    </DataCard>
  );
};
