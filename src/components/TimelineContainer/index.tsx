import React from 'react';
import styles from './TimelineContainer.module.scss';
import { ProgressBarContainer } from '../ProgressBarContainer';

type TimelineContainerProps = {
  onDrag: (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
  onDragEnd: () => void;
  progress: number;
  screenWidth: number;
};

export const TimelineContainer = ({ onDrag, onDragEnd, progress, screenWidth }: TimelineContainerProps) => {
  const [isTimelineContainerHovered, setIsTimelineContainerHovered] = React.useState<boolean>(false);

  const screenWidth1 = window.innerWidth;

  const maxProgressBarWidth =
    screenWidth1 > 1439
      ? 742
      : screenWidth1 <= 1439 && screenWidth1 > 1164
      ? 582
      : screenWidth1 <= 1164 && screenWidth1 > 667
      ? 210
      : 99; // Максимальная ширина полосы воспроизведения
  const progressBarWidth = progress * (maxProgressBarWidth / 100); // Вычисление ширины полосы воспроизведения с учетом прогресса
  const progressBarStyle = { width: `${progressBarWidth}px` }; // Стиль с новой шириной

  return (
    <div
      className={styles.root}
      onMouseEnter={() => setIsTimelineContainerHovered(true)}
      onMouseLeave={() => setIsTimelineContainerHovered(false)}
      onMouseMove={onDrag}
      onTouchMove={onDrag}
      onMouseUp={onDragEnd}
    >
      <ProgressBarContainer progressBarStyle={progressBarStyle} isLineHovered={isTimelineContainerHovered} />
      <div className={styles.timeline}></div>
    </div>
  );
};
