import React from 'react';
import styles from './ProgressBarContainer.module.scss';
import clsx from 'clsx';

type ProgressBarStyleType = {
  width: string;
};

type ProgressBarContainerProps = {
  isChangeVolume?: boolean;
  progressBarStyle: ProgressBarStyleType;
  isLineHovered: boolean;
  type?: string;
};

export const ProgressBarContainer = ({
  isChangeVolume,
  progressBarStyle,
  isLineHovered,
  type,
}: ProgressBarContainerProps) => {
  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.progressBar, type === 'volume' && !isChangeVolume && styles.progressBarAnimationActive)}
        style={progressBarStyle}
      ></div>
      <button className={clsx(styles.progressBarButton, isLineHovered && styles.progressBarButtonActive)}></button>
    </div>
  );
};
