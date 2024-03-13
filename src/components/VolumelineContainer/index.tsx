import React from 'react';
import { VolumeButton } from '../VolumeButton';
import styles from './VolumelineContainer.module.scss';
import { ProgressBarContainer } from '../ProgressBarContainer';

type VolumelineContainerProps = {
  onDrag: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMuteButtonClick: () => void;
  volume: number;
  isMuted: boolean;
  screenWidth: number;
};

export const VolumelineContainer = ({
  onDrag,
  onMuteButtonClick,
  volume,
  isMuted,
  screenWidth,
}: VolumelineContainerProps) => {
  const volumeRef = React.useRef<HTMLDivElement>(null);

  const [isVolumeLineHovered, setIsVolumeLineHovered] = React.useState<boolean>(false);

  const screenWidth1 = window.innerWidth;

  const maxVolumeProgressBarWidth =
    screenWidth1 > 810 ? 114 : screenWidth1 <= 810 && screenWidth1 > 612 ? 70.5 : screenWidth1 <= 612 ? 19.2 : 0;
  const volumeProgressBarWidth = volume * (maxVolumeProgressBarWidth / 100); // Вычисление ширины полосы воспроизведения с учетом прогресса
  const volumeProgressBarStyle = { width: `${volumeProgressBarWidth}px` }; // Стиль с новой шириной

  return (
    <div
      className={styles.root}
      ref={volumeRef}
      onMouseEnter={() => setIsVolumeLineHovered(true)}
      onMouseLeave={() => setIsVolumeLineHovered(false)}
    >
      <div className={styles.wrapper} onMouseMove={onDrag}>
        <VolumeButton onClick={onMuteButtonClick} isMuted={isMuted} />
        <ProgressBarContainer
          progressBarStyle={volumeProgressBarStyle}
          isLineHovered={isVolumeLineHovered}
          type='volume'
        />
        <div className={styles.volumeline}></div>
      </div>
    </div>
  );
};
