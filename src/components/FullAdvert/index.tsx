import React from 'react';
import styles from './FullAdvert.module.scss';
import { AdvertCardType, CTA, CloseButton, SharePannel } from '../../components';
import clsx from 'clsx';

type FullAdvertProps = {
  onClose: () => void;
  advertItem: AdvertCardType | null;
  cardId: number | null;
};

export const FullAdvert = ({ onClose, advertItem, cardId }: FullAdvertProps) => {
  const [isSocialIconsOpen, setIsSocialIconsOpen] = React.useState<boolean>(false);

  return (
    <div className={clsx(styles.root, cardId && styles.rootIsOpened)}>
      <span className={clsx(styles.loadingText, !advertItem && styles.loadingTextVisible)}>Загрузка...</span>
      <article className={clsx(styles.rootContainer, advertItem && styles.rootContainerVisible)}>
        <div className={styles.image}></div>
        <div className={styles.textContainer}>
          <span className={styles.date}>{advertItem?.createdAt}</span>
          <h3 className={styles.title}>{advertItem?.title}</h3>
          <p className={styles.text}>{advertItem?.content}</p>
          <div className={styles.shareContainer}>
            <CTA
              linkText='Поделиться'
              type='share'
              onClick={() => setIsSocialIconsOpen(!isSocialIconsOpen)}
              isBorderShown={isSocialIconsOpen}
            />
            <SharePannel isOpen={isSocialIconsOpen} itemTitle={advertItem?.title} />
          </div>
        </div>
        <CloseButton onClick={onClose} place='adverts' />
      </article>
    </div>
  );
};
