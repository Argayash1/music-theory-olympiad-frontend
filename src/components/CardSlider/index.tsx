import React from 'react';
import { SliderNextButton } from '../SliderNextButton';
import styles from './CardSlider.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectAdvertId } from '../../redux/advert/selectors';
import { Status } from '../../redux/olympData/types';
import { SliderCardSkeleton } from '../SliderCardSkeleton';

type CardSliderProps = {
  onSwitchToNextSlides: () => void;
  onSwitchToPrevSlides: () => void;
  children: React.ReactNode;
  switchCount: number;
  nextButtonDisabled: boolean;
  status?: Status;
  type?: string;
};

export const CardSlider = ({
  children,
  onSwitchToPrevSlides,
  onSwitchToNextSlides,
  switchCount,
  nextButtonDisabled,
  status,
  type,
}: CardSliderProps) => {
  const advertItem = useSelector(selectAdvertId);

  const cardSkeletons = [...new Array(3)].map((item, index) => (
    <li key={index}>
      <SliderCardSkeleton />
    </li>
  ));

  return (
    <div
      className={clsx(
        styles.root,
        type === 'archive' && styles.rootTypeArchive,
        type === 'adverts' && advertItem && styles.rootHidden,
      )}
    >
      <SliderNextButton
        type='left'
        onClick={onSwitchToPrevSlides}
        switchCount={switchCount}
        nextButtonDisabled={nextButtonDisabled}
      />
      <div className={clsx(styles.wrapper, type === 'archive' && styles.wrapperTypeArchive)}>
        {status === 'loading' ? <ul className={styles.list}>{cardSkeletons}</ul> : children}
      </div>
      <SliderNextButton
        onClick={onSwitchToNextSlides}
        switchCount={switchCount}
        nextButtonDisabled={nextButtonDisabled}
      />
    </div>
  );
};
