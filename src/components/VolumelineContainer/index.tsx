import React from 'react';
import { VolumeButton } from '../VolumeButton';
import styles from './VolumelineContainer.module.scss';
import { ProgressBarContainer } from '../ProgressBarContainer';
import { ButtonClick } from '../AudioPlayer';
import clsx from 'clsx';

type VolumelineContainerProps = {
  onHover: () => void;
  onDisHover: () => void;
  onDisHoverVolumeContainer: () => void;
  onDrag: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMuteButtonClick: () => void;
  volume: number;
  isVolumeContainerHovered: boolean;
  isChangeVolume: boolean;
  isMuted: boolean;
  screenWidth: number;
};

export const VolumelineContainer = ({
  onHover,
  onDisHover,
  onDisHoverVolumeContainer,
  onDrag,
  onMuteButtonClick,
  volume,
  isVolumeContainerHovered,
  isChangeVolume,
  isMuted,
  screenWidth,
}: VolumelineContainerProps) => {
  const volumeRef = React.useRef<HTMLDivElement>(null);

  const [isVolumeLineHovered, setIsVolumeLineHovered] = React.useState<boolean>(false);

  const maxVolumeProgressBarWidth =
    screenWidth > 810 ? 110 : screenWidth <= 810 && screenWidth > 612 ? 70.5 : screenWidth <= 612 ? 19.2 : 0;
  const volumeProgressBarWidth = volume * (maxVolumeProgressBarWidth / 100); // Вычисление ширины полосы воспроизведения с учетом прогресса
  const volumeProgressBarStyle = !isVolumeContainerHovered ? { width: '0' } : { width: `${volumeProgressBarWidth}px` }; // Стиль с новой шириной

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
    <div className={styles.root} onMouseEnter={onHover} onMouseLeave={onDisHover} ref={volumeRef}>
      <div
        className={clsx(styles.wrapper, isVolumeContainerHovered && styles.wrapperHovered)}
        onMouseEnter={() => setIsVolumeLineHovered(true)}
        onMouseLeave={() => !isChangeVolume && setIsVolumeLineHovered(false)}
        onMouseMove={onDrag}
      >
        <ProgressBarContainer
          progressBarStyle={volumeProgressBarStyle}
          isChangeVolume={isChangeVolume}
          isLineHovered={isVolumeLineHovered}
          type='volume'
        />
        <div className={clsx(styles.volumeline, isVolumeContainerHovered && styles.volumelineHovered)}></div>
      </div>
      <VolumeButton onClick={onMuteButtonClick} isMuted={isMuted} />
    </div>
  );
};
