import React from 'react';
import styles from './ArchiveCardList.module.scss';
import { archiveCardNames } from '../../utils/archiveCardNames';
import { ArchiveCard, CardSlider } from '../../components';
import { useSelector } from 'react-redux';
import { selectArchiveData } from '../../redux/archive/selectors';
import { selectScreenWidth } from '../../redux/olympData/selectors';

export const ArchiveCardList = () => {
  const { items, status } = useSelector(selectArchiveData);
  const screenWidth = useSelector(selectScreenWidth);

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

  const offset = switchCount * -390;
  const nextButtonDisabled = screenWidth > 1439 ? switchCount === 1 : switchCount === 2;

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
