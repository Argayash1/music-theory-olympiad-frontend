import React from 'react';
import styles from './ProgressBarContainer.module.scss';
import clsx from 'clsx';

type ProgressBarStyleType = {
  width: string;
};

type ProgressBarContainerProps = {
  progressBarStyle: ProgressBarStyleType;
  isLineHovered: boolean;
  type?: string;
};

export const ProgressBarContainer = ({ progressBarStyle, isLineHovered, type }: ProgressBarContainerProps) => {
  return (
    <div className={clsx(styles.root, type === 'volume' && styles.rootTypeVolume)}>
      <div
        className={clsx(styles.progressBar, type === 'volume' && styles.progressBarTypeVolume)}
        style={progressBarStyle}
      ></div>
      <button className={clsx(styles.progressBarButton, isLineHovered && styles.progressBarButtonActive)}></button>
    </div>
  );
};
