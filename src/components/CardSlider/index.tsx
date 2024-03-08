import React from 'react';
import { SliderNextButton } from '../SliderNextButton';
import styles from './CardSlider.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectAdvertId } from '../../redux/advert/selectors';

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
  const advertItem = useSelector(selectAdvertId);

  return (
    <div className={clsx(styles.root, type === 'archive' && styles.rootTypeArchive, advertItem && styles.rootHidden)}>
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
