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
  onCtaClick: (_id: string | null) => void;
};

export const AdvertCardList = ({ advertCardsItems, status, onCtaClick }: AdvertCardListProps) => {
  const screenWidth = useSelector(selectScreenWidth);

  const [switchCount, setSwitchCount] = React.useState<number>(0);

  const advertCards = advertCardsItems.map((item, index) => (
    <li key={item._id}>
      <AdvertCard {...item} onCtaClick={onCtaClick} isCardOnScreen={index === switchCount} />
    </li>
  ));

  const offset =
    screenWidth > 1439 ? switchCount * -390 : screenWidth <= 1189 ? switchCount * -290 : switchCount * -505;

  const nextButtonDisabled =
    screenWidth > 1383 || (screenWidth <= 1115 && screenWidth > 975)
      ? advertCardsItems.length - switchCount <= 3
      : screenWidth <= 975 && screenWidth > 667
      ? advertCardsItems.length - switchCount <= 2
      : advertCardsItems.length - switchCount <= 1;

  return (
    <CardSlider
      onSwitchToPrevSlides={() => setSwitchCount((prev) => prev - 1)}
      onSwitchToNextSlides={() => setSwitchCount((prev) => prev + 1)}
      switchCount={switchCount}
      nextButtonDisabled={nextButtonDisabled}
      status={status}
      type='adverts'
      screenWidth={screenWidth}
    >
      <ul className={styles.list} style={{ transform: `translateX(${offset}px)` }}>
        {advertCards}
      </ul>
    </CardSlider>
  );
};
