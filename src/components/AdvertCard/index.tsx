import React from 'react';
import styles from './AdvertCard.module.scss';
import { CTA, DataCard, TextWithCustomLinks } from '../../components';
import { handleFormateDate } from '../../utils/utils';
import { LinkData } from '../../redux/advert/types';
import { useSelector } from 'react-redux';
import { selectScreenWidth } from '../../redux/olympData/selectors';
import { selectAdvertId } from '../../redux/advert/selectors';
import clsx from 'clsx';

type AdvertCardProps = {
  _id: string;
  createdAt: string;
  title: string;
  content: string;
  links: LinkData[];
  isCardOnScreen: boolean;
  onCtaClick: (cardId: string | null) => void;
};

export const AdvertCard = ({ _id, createdAt, title, content, links, isCardOnScreen, onCtaClick }: AdvertCardProps) => {
  const screenWidth = useSelector(selectScreenWidth);
  const advertId = useSelector(selectAdvertId);

  const isCardExpanded = Boolean(screenWidth <= 375 && advertId === _id && isCardOnScreen);

  return (
    <DataCard isCardExpanded={isCardExpanded}>
      <span className={styles.date}>{handleFormateDate(createdAt)}</span>
      <h3 className={clsx(styles.title, isCardExpanded && styles.titleTypeFullText)}>{title}</h3>
      <TextWithCustomLinks text={content} links={links} isShowFullText={isCardExpanded} />
      <CTA
        linkText={isCardExpanded ? 'Свернуть' : 'Узнать больше'}
        type='learn'
        onClick={isCardExpanded ? () => onCtaClick(null) : () => onCtaClick(_id)}
        isCTATypeCollapse={isCardExpanded}
      />
    </DataCard>
  );
};
