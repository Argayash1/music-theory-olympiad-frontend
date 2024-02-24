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
    ></button>
  );
};
