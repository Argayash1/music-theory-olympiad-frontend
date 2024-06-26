import React from 'react';
import { VolumeButton } from '../VolumeButton';
import styles from './VolumelineContainer.module.scss';
import { ProgressBarContainer } from '../ProgressBarContainer';

type VolumelineContainerProps = {
  onDrag: (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
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
  const [isVolumeLineContainerHovered, setIsVolumeLineContainerHovered] = React.useState<boolean>(false);

  const screenWidth1 = window.innerWidth;

  const maxVolumeProgressBarWidth = screenWidth1 > 667 ? 114 : 44;
  const volumeProgressBarWidth = volume * (maxVolumeProgressBarWidth / 100); // Вычисление ширины полосы воспроизведения с учетом прогресса
  const volumeProgressBarStyle = { width: `${volumeProgressBarWidth}px` }; // Стиль с новой шириной

  return (
    <div className={styles.root}>
      <div
        className={styles.wrapper}
        onMouseMove={onDrag}
        onTouchMove={onDrag}
        onMouseEnter={() => setIsVolumeLineContainerHovered(true)}
        onMouseLeave={() => setIsVolumeLineContainerHovered(false)}
      >
        <VolumeButton onClick={onMuteButtonClick} isMuted={isMuted} volume={volume} />
        <ProgressBarContainer
          progressBarStyle={volumeProgressBarStyle}
          isLineHovered={isVolumeLineContainerHovered}
          type='volume'
        />
        <div className={styles.volumeline}></div>
      </div>
    </div>
  );
};
