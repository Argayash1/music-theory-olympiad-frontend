import React from 'react';
import { VolumeButton } from '../VolumeButton';
import styles from './VolumelineContainer.module.scss';
import { ProgressBarContainer } from '../ProgressBarContainer';
import { ButtonClick } from '../AudioPlayer';
import clsx from 'clsx';

type VolumelineContainerProps = {
  onDisHoverVolumeContainer: () => void;
  onDrag: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMuteButtonClick: () => void;
  volume: number;
  isVolumeContainerHovered: boolean;
  isMuted: boolean;
  screenWidth: number;
};

export const VolumelineContainer = ({
  onDisHoverVolumeContainer,
  onDrag,
  onMuteButtonClick,
  volume,
  isVolumeContainerHovered,
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

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as ButtonClick;
      if (volumeRef.current && !_event.composedPath().includes(volumeRef.current)) {
        setIsVolumeLineHovered(false);
        onDisHoverVolumeContainer();
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [onDisHoverVolumeContainer]);

  return (
    <div className={styles.root} ref={volumeRef}>
      <div className={styles.wrapper} onMouseMove={onDrag}>
        <VolumeButton onClick={onMuteButtonClick} isMuted={isMuted} />
        <ProgressBarContainer
          progressBarStyle={volumeProgressBarStyle}
          isLineHovered={isVolumeLineHovered}
          type='volume'
        />
        <div className={clsx(styles.volumeline, isVolumeContainerHovered && styles.volumelineHovered)}></div>
      </div>
    </div>
  );
};
