import React from 'react';
import styles from './FullAdvert.module.scss';
import { AdvertCardType, CTA, CloseButton } from '../../components';

type FullAdvertProps = {
  onClose: () => void;
  advertItem: AdvertCardType;
};

export const FullAdvert = ({ onClose, advertItem }: FullAdvertProps) => {
  return (
    <article className={styles.root}>
      <div className={styles.imgContainer}>
        <div className={styles.imgBackground}>
          <div className={styles.img}></div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.date}>{advertItem.createdAt}</span>
        <h3 className={styles.title}>{advertItem.title}</h3>
        <p className={styles.text}>{advertItem.content}</p>
        <CTA linkText='Поделиться' type='share' onClick={onClose} />
      </div>
      <CloseButton onClick={onClose} place='adverts' />
    </article>
  );
};
