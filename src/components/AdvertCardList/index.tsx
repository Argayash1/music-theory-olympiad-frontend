import React from 'react';
import styles from './AdvertCardList.module.scss';
import { AdvertCard, CardSlider } from '../../components';
import { Advert } from '../../redux/advert/types';
import { Status } from '../../redux/olympData/types';
import { selectScreenWidth } from '../../redux/olympData/selectors';
import { useSelector } from 'react-redux';

type AdvertCardListProps = {
  advertCardsItems: Advert[];
  status: Status;
  onCtaClick: (_id: string) => void;
};

export const AdvertCardList = ({ advertCardsItems, status, onCtaClick }: AdvertCardListProps) => {
  const screenWidtrh = useSelector(selectScreenWidth);

  const [switchCount, setSwitchCount] = React.useState<number>(0);

  const advertCards = advertCardsItems.map((item) => (
    <li key={item._id}>
      <AdvertCard {...item} onCtaClick={onCtaClick} />
    </li>
  ));

  const cardWidth = 370;
  const cardsGap = 20;
  const offset = screenWidtrh > 1439 ? switchCount * -390 : switchCount * -505;
  const minCardListWidth = screenWidtrh > 1439 ? 1150 : 990;
  const cardListWidth = cardWidth * advertCardsItems.length + cardsGap * (advertCardsItems.length - 1);
  const nextButtonDisabled = cardListWidth - Math.abs(offset) <= minCardListWidth;

  return (
    <CardSlider
      onSwitchToPrevSlides={() => setSwitchCount((prev) => prev - 1)}
      onSwitchToNextSlides={() => setSwitchCount((prev) => prev + 1)}
      switchCount={switchCount}
      nextButtonDisabled={nextButtonDisabled}
      status={status}
      type='adverts'
    >
      <ul className={styles.list} style={{ transform: `translateX(${offset}px)` }}>
        {advertCards}
      </ul>
    </CardSlider>
  );
};
