import React from 'react';
import { SliderNextButton } from '../SliderNextButton';
import styles from './CardSlider.module.scss';
import clsx from 'clsx';

type CardSliderProps = {
  onSwitchToNextSlides: () => void;
  onSwitchToPrevSlides: () => void;
  children: React.ReactNode;
  switchCount: number;
  nextButtonDisabled: boolean;
  type?: string;
};

export const CardSlider = ({
  children,
  onSwitchToPrevSlides,
  onSwitchToNextSlides,
  switchCount,
  nextButtonDisabled,
  type,
}: CardSliderProps) => {
  return (
    <div className={clsx(styles.root, type === 'archive' && styles.rootTypeArchive)}>
      <SliderNextButton
        type='left'
        onClick={onSwitchToPrevSlides}
        switchCount={switchCount}
        nextButtonDisabled={nextButtonDisabled}
      />
      <div className={clsx(styles.wrapper, type === 'archive' && styles.wrapperTypeArchive)}>{children}</div>
      <SliderNextButton
        onClick={onSwitchToNextSlides}
        switchCount={switchCount}
        nextButtonDisabled={nextButtonDisabled}
      />
    </div>
  );
};
