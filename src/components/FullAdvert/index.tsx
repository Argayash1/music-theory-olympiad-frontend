import React from 'react';
import styles from './FullAdvert.module.scss';
import { CTA, CloseButton, SharePannel, TextWithCustomLink } from '../../components';
import clsx from 'clsx';
import { Advert } from '../../redux/advert/types';
import { handleFormateDate } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { setAdvertId } from '../../redux/advert/slice';

type FullAdvertProps = {
  advertItem: Advert | null;
  cardId: string | null;
};

export const FullAdvert = ({ advertItem, cardId }: FullAdvertProps) => {
  const dispatch = useDispatch();

  const [isSocialIconsOpen, setIsSocialIconsOpen] = React.useState<boolean>(false);

  const handleCloseFullAdvert = () => {
    dispatch(setAdvertId(null));
    setIsSocialIconsOpen(false);
  };

  return (
    <div className={clsx(styles.root, cardId && styles.rootIsOpened)}>
      <span className={clsx(styles.loadingText, !advertItem && styles.loadingTextVisible)}>Загрузка...</span>
      <article className={clsx(styles.rootContainer, advertItem && styles.rootContainerVisible)}>
        <div className={styles.image}></div>
        <div className={styles.textContainer}>
          <span className={styles.date}>{advertItem && handleFormateDate(advertItem.createdAt)}</span>
          <h3 className={styles.title}>{advertItem?.title}</h3>

          {advertItem?.linkText && advertItem.linkUrl ? (
            <TextWithCustomLink
              text={advertItem?.content}
              linkText={advertItem?.linkText}
              linkUrl={advertItem.linkUrl}
              place='full-advert'
            />
          ) : (
            <p className={styles.text}>{advertItem?.content}</p>
          )}

          <div className={styles.shareContainer}>
            <CTA
              linkText='Поделиться'
              type='share'
              onClick={() => setIsSocialIconsOpen(!isSocialIconsOpen)}
              isBorderShown={isSocialIconsOpen}
            />
            <SharePannel
              isOpen={isSocialIconsOpen}
              itemTitle={advertItem?.title}
              onClose={() => setIsSocialIconsOpen(false)}
            />
          </div>
        </div>
        <CloseButton onClick={handleCloseFullAdvert} place='adverts' />
      </article>
    </div>
  );
};
