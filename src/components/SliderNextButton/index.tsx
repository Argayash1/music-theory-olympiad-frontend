import React from 'react';
import styles from './SliderNextButton.module.scss';
import clsx from 'clsx';

type SliderNextButtonProps = {
  type?: string;
};

export const SliderNextButton = ({ type }: SliderNextButtonProps) => {
  return <button className={clsx(styles.root, type === 'left' && styles.rootTypeLeft)}></button>;
};
