import React from 'react';
import styles from './SliderButton.module.scss';
import clsx from 'clsx';

type SliderNextButtonProps = {
  type?: string;
  place?: string;
  switchCount: number;
  onClick?: () => void;
  nextButtonDisabled?: boolean;
};

export const SliderButton = ({ type, place, onClick, switchCount, nextButtonDisabled }: SliderNextButtonProps) => {
  return (
    <button
      className={clsx(
        styles.root,
        nextButtonDisabled === undefined && styles.rootTypeLeft,
        type === 'jury' && styles.rootTypeJury,
        type === 'prep-materials' && styles.rootTypePrepMaterials,
        type === 'bottom' && styles.rootTypeBottom,
        place === 'prep-materials' && styles.rootPlacePrepMaterials,
      )}
      onClick={onClick}
      disabled={nextButtonDisabled === undefined ? switchCount === 0 : nextButtonDisabled}
    >
      <svg viewBox='0 0 22 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M2 2L20 19L2 36' stroke='black' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </button>
  );
};
