import React from 'react';
import styles from './CardSlider.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectAdvertId } from '../../redux/advert/selectors';
import { Status } from '../../redux/olympData/types';
import { SliderButton, SliderCardSkeleton } from '../../components';

type CardSliderProps = {
  onSwitchToNextSlides: () => void;
  onSwitchToPrevSlides: () => void;
  children: React.ReactNode;
  switchCount: number;
  nextButtonDisabled: boolean;
  status?: Status;
  type?: string;
  isMenuOpen?: boolean;
  screenWidth?: number;
};

export const CardSlider = ({
  children,
  onSwitchToPrevSlides,
  onSwitchToNextSlides,
  switchCount,
  nextButtonDisabled,
  status,
  type,
  isMenuOpen,
  screenWidth,
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
        type === 'adverts' && advertItem && screenWidth && screenWidth > 375 && styles.rootHidden,
        type === 'prep-materials' && styles.rootTypePrepMaterials,
        type === 'jury' && styles.rootTypeJury,
        type === 'archive-tabs' && styles.rootTypeArchiveTabs,
      )}
    >
      <SliderButton
        onClick={onSwitchToPrevSlides}
        switchCount={switchCount}
        type={type}
        place={type === 'archive-tabs' || type === 'archive' ? type : undefined}
      />
      <div
        className={clsx(
          styles.wrapper,
          type === 'archive' && styles.wrapperTypeArchive,
          type === 'prep-materials' && styles.wrapperTypePrepMaterials,
          type === 'jury' && styles.wrapperTypeJury,
          type === 'archive-tabs' && styles.wrapperTypeArchiveTabs,
        )}
      >
        {status === 'loading' ? <ul className={styles.list}>{cardSkeletons}</ul> : children}
      </div>
      <div
        className={clsx(
          styles.buttons,
          type === 'prep-materials' && styles.buttonsTypePrepMaterials,
          type === 'archive' && styles.buttonsTypeArchive,
          type === 'archive-tabs' && styles.buttonsTypeArchiveTabs,
        )}
      >
        <SliderButton
          onClick={onSwitchToPrevSlides}
          switchCount={switchCount}
          type='bottom'
          place={type}
          isMenuOpen={isMenuOpen}
        />
        <SliderButton
          onClick={onSwitchToNextSlides}
          switchCount={switchCount}
          nextButtonDisabled={nextButtonDisabled}
          type={type}
          place={type}
        />
      </div>
    </div>
  );
};
