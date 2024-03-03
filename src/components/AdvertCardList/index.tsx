import React from 'react';
import styles from './AdvertCardList.module.scss';
import { AdvertCard, CardSlider } from '../../components';

export type AdvertCardType = {
  _id: number;
  createdAt: string;
  title: string;
  content: string;
};

type AdvertCardListProps = {
  advertCardsItems: AdvertCardType[];
  cardId: number | null;
  onCtaClick: (_id: number) => void;
};

export const AdvertCardList = ({ advertCardsItems, cardId, onCtaClick }: AdvertCardListProps) => {
  const [switchCount, setSwitchCount] = React.useState<number>(0);

  const advertCards = advertCardsItems.map((item) => (
    <li key={item._id}>
      <AdvertCard {...item} onCtaClick={onCtaClick} />
    </li>
  ));

  const cardWidth = 370;
  const cardsGap = 20;
  const offset = switchCount * -390;
  const minCardListWidth = 1150;
  const cardListWidth = cardWidth * advertCardsItems.length + cardsGap * (advertCardsItems.length - 1);
  const nextButtonDisabled = cardListWidth - Math.abs(offset) <= minCardListWidth;

  return (
    <CardSlider
      onSwitchToPrevSlides={() => setSwitchCount((prev) => prev - 1)}
      onSwitchToNextSlides={() => setSwitchCount((prev) => prev + 1)}
      switchCount={switchCount}
      nextButtonDisabled={nextButtonDisabled}
      cardId={cardId}
    >
      <ul className={styles.list} style={{ transform: `translateX(${offset}px)` }}>
        {advertCards}
      </ul>
    </CardSlider>
  );
};
