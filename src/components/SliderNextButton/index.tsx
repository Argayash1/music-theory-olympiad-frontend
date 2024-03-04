import React from 'react';
import styles from './SliderNextButton.module.scss';
import clsx from 'clsx';

type SliderNextButtonProps = {
  type?: string;
  switchCount?: number;
  onClick?: () => void;
  nextButtonDisabled?: boolean;
};

export const SliderNextButton = ({ type, onClick, switchCount, nextButtonDisabled }: SliderNextButtonProps) => {
  return (
    <button
      className={clsx(styles.root, type === 'left' && styles.rootTypeLeft)}
      onClick={onClick}
      disabled={type === 'left' ? switchCount === 0 : nextButtonDisabled}
    >
      <svg width='22' height='38' viewBox='0 0 22 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M2 2L20 19L2 36' stroke='black' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </button>
  );
};
