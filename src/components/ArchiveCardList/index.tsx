import React from 'react';
import styles from './ArchiveCardList.module.scss';
import { archiveCardNames } from '../../utils/archiveCardNames';
import { ArchiveCard } from '../ArchiveCard';
import { CardSlider } from '../CardSlider';
import { useSelector } from 'react-redux';
import { selectArchiveData } from '../../redux/archive/selectors';

export const ArchiveCardList = () => {
  const { items, status } = useSelector(selectArchiveData);

  const [switchCount, setSwitchCount] = React.useState<number>(0);

  const archiveCardItems =
    status === 'loading'
      ? []
      : [items[0].dictations, items[0].soundAnalysis, items[0].harmonization, items[0].solfeggio];

  const archiveCards = archiveCardNames.map((item, index) => (
    <li key={index}>
      <ArchiveCard
        archiveCardData={archiveCardItems[index]}
        title={item.itemName}
        extensions={item.extensions}
        itemIndex={index}
      />
    </li>
  ));

  const cardWidth = 370;
  const cardsGap = 20;
  const offset = switchCount * -390;
  const minCardListWidth = 1150;
  const cardListWidth = cardWidth * archiveCardNames.length + cardsGap * (archiveCardNames.length - 1);
  const nextButtonDisabled = cardListWidth - Math.abs(offset) <= minCardListWidth;

  return (
    <CardSlider
      onSwitchToPrevSlides={() => setSwitchCount((prev) => prev - 1)}
      onSwitchToNextSlides={() => setSwitchCount((prev) => prev + 1)}
      switchCount={switchCount}
      nextButtonDisabled={nextButtonDisabled}
      status={status}
      type='archive'
    >
      <ul className={styles.list} style={{ transform: `translateX(${offset}px)` }}>
        {archiveCards}
      </ul>
    </CardSlider>
  );
};
