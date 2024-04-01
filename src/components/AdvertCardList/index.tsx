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

  const offset =
    screenWidtrh > 1439 ? switchCount * -390 : screenWidtrh <= 1189 ? switchCount * -290 : switchCount * -505;
  const nextButtonDisabled =
    screenWidtrh > 1439 || (screenWidtrh <= 1189 && screenWidtrh > 1049)
      ? advertCardsItems.length - switchCount <= 3
      : screenWidtrh <= 1049
      ? advertCardsItems.length - switchCount <= 2
      : advertCardsItems.length - switchCount <= 2;

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
