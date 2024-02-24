import React from 'react';
import { SliderNextButton } from '../SliderNextButton';
import styles from './CardSlider.module.scss';

type CardSliderProps = {
  onSwitchToNextSlides: () => void;
  onSwitchToPrevSlides: () => void;
  children: React.ReactNode;
  switchCount: number;
  nextButtonDisabled: boolean;
};

export const CardSlider = ({
  children,
  onSwitchToPrevSlides,
  onSwitchToNextSlides,
  switchCount,
  nextButtonDisabled,
}: CardSliderProps) => {
  return (
    <div className={styles.root}>
      <SliderNextButton
        type='left'
        onClick={onSwitchToPrevSlides}
        switchCount={switchCount}
        nextButtonDisabled={nextButtonDisabled}
      />
      <div className={styles.wrapper}>{children}</div>
      <SliderNextButton
        onClick={onSwitchToNextSlides}
        switchCount={switchCount}
        nextButtonDisabled={nextButtonDisabled}
      />
    </div>
  );
};
