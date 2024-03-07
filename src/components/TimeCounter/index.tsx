import React from 'react';
import styles from './TimeCounter.module.scss';
import { handleChangeSecondsToMinutesAndSeconds } from '../../utils/utils';

type TimeCounterProps = {
  duration: number;
};

export const TimeCounter = ({ duration }: TimeCounterProps) => {
  return <span className={styles.root}>{handleChangeSecondsToMinutesAndSeconds(duration)}</span>;
};
