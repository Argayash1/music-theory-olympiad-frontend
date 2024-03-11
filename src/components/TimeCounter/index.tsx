import React from 'react';
import styles from './TimeCounter.module.scss';
import { handleChangeSecondsToMinutesAndSeconds } from '../../utils/utils';
import clsx from 'clsx';

type TimeCounterProps = {
  duration: number;
  type?: string;
};

export const TimeCounter = ({ duration, type }: TimeCounterProps) => {
  return (
    <span className={clsx(styles.root, type === 'right' && styles.rootTypeRight)}>
      {handleChangeSecondsToMinutesAndSeconds(duration)}
    </span>
  );
};
