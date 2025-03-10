import React from 'react';
import styles from './FullAdvert.module.scss';
import { CTA, CloseButton, FullAdvertSkeleton, SharePannel, TextWithCustomLinks } from '..';
import clsx from 'clsx';
import { Advert } from '../../redux/advert/types';
import { handleFormateDate } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { setAdvertId } from '../../redux/advert/slice';
import { Status } from '../../redux/olympData/types';

type FullAdvertProps = {
  advertItem: Advert | null;
  status: Status;
};

export const FullAdvert = ({ advertItem, status }: FullAdvertProps) => {
  const dispatch = useDispatch();

  const [isSocialIconsOpen, setIsSocialIconsOpen] = React.useState<boolean>(false);

  const handleCloseFullAdvert = () => {
    dispatch(setAdvertId(null));
    setIsSocialIconsOpen(false);
  };

  return (
    <div className={styles.root}>
      {status === 'loading' ? (
        <FullAdvertSkeleton />
      ) : (
        <article className={clsx(styles.rootContainer, status === 'success' && styles.rootContainerVisible)}>
          <div className={styles.image}></div>
          <div className={styles.textContainer}>
            <span className={styles.date}>{advertItem && handleFormateDate(advertItem.createdAt)}</span>
            <h3 className={styles.title}>{advertItem?.title}</h3>
            <TextWithCustomLinks text={advertItem?.content || ''} place='full-advert' />
          </div>
          <CloseButton onClick={handleCloseFullAdvert} place='adverts' />
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
        </article>
      )}
    </div>
  );
};
