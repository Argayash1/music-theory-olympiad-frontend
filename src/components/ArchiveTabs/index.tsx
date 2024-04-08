import React from 'react';
import styles from './ArchiveTabs.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectScreenWidth } from '../../redux/olympData/selectors';
import { CardSlider } from '../CardSlider';

type TabsProps = {
  value: number;
  onChangeTab: (index: number) => void;
};

const archiveTabNames = [2023, 2022, 2021];

export const ArchiveTabs = ({ value, onChangeTab }: TabsProps) => {
  const screenWidth = useSelector(selectScreenWidth);

  const [switchCount, setSwitchCount] = React.useState<number>(0);

  const handleChangeToPrevTab = () => {
    setSwitchCount((prev) => prev - 1);
    onChangeTab(switchCount);
  };

  const handleChangeToNextTab = () => {
    setSwitchCount((prev) => prev + 1);
    onChangeTab(switchCount);
  };

  const offset = switchCount * -75.41;

  return (
    <>
      {screenWidth > 420 ? (
        <ul className={styles.root}>
          {archiveTabNames.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <button
                className={clsx(styles.button, value === index && styles.buttonActive)}
                onClick={() => onChangeTab(index)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <CardSlider
          switchCount={switchCount}
          onSwitchToPrevSlides={handleChangeToPrevTab}
          onSwitchToNextSlides={handleChangeToNextTab}
          nextButtonDisabled={switchCount === 2}
          type='archive-tabs'
        >
          <ul className={clsx(styles.root, styles.rootPlaceSlider)} style={{ transform: `translateX(${offset}px)` }}>
            {archiveTabNames.map((item, index) => (
              <li key={index}>
                <span className={styles.year}>{item}</span>
              </li>
            ))}
          </ul>
        </CardSlider>
      )}
    </>
  );
};
