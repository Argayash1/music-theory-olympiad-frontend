import React from 'react';
import styles from './AdvertCardList.module.scss';
import { AdvertCard, CardSlider } from '../../components';
import { Advert } from '../../redux/advert/types';

type AdvertCardListProps = {
  advertCardsItems: Advert[];
  onCtaClick: (_id: string) => void;
};

export const AdvertCardList = ({ advertCardsItems, onCtaClick }: AdvertCardListProps) => {
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
    >
      <ul className={styles.list} style={{ transform: `translateX(${offset}px)` }}>
        {advertCards}
      </ul>
    </CardSlider>
  );
};
