import React from 'react';
import styles from './AudioPlayer.module.scss';
import { PlayButton, TimeCounter, TimelineContainer, VolumelineContainer, CloseButton, CTA } from '../../components';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectScreenWidth } from '../../redux/olympData/selectors';

type AudioPlayerProps = {
  src: string;
  title: string;
  author: string;
  isPlaying: boolean;
  onSetIsPlaying: (isPlaying: boolean) => void;
  onClearAudioData: () => void;
  onTogglePlay: () => void;
};

export type ButtonClick = MouseEvent & {
  composedPath: Node[];
};

function isTouchEvent(
  event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
): event is React.TouchEvent<HTMLDivElement> {
  return 'touches' in event;
}

function isMouseEvent(
  event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
): event is React.MouseEvent<HTMLDivElement> {
  return 'buttons' in event;
}

export const AudioPlayer = React.forwardRef<HTMLAudioElement, AudioPlayerProps>((props, ref) => {
  const { src, title, author, isPlaying, onSetIsPlaying, onClearAudioData, onTogglePlay } = props;

  const screenWidth = useSelector(selectScreenWidth);

  const audioLinkRef = React.useRef<HTMLAnchorElement>(null);
  const isChangeVolume = React.useRef<boolean>(false);

  const [progress, setProgress] = React.useState<number>(0);
  const [totalDuration, setTotalDuration] = React.useState<number>(0);
  const [currentDuration, setCurrentDuration] = React.useState<number>(0);
  const [isVolumeContainerHovered, setIsVolumeContainerHovered] = React.useState<boolean>(false);
  const [previousVolume, setPreviousVolume] = React.useState<number>(1);
  const [isMuted, setIsmuted] = React.useState<boolean>(false);
  const [volume, setVolume] = React.useState<number>(100);
  const [isChangeTime, setIsChangeTime] = React.useState<boolean>(false);
  const [isAudioLoaded, setIsAudioLoaded] = React.useState<boolean>(false);

  const handleDishoverVolumeContainer = () => {
    setIsVolumeContainerHovered(false);
    isChangeVolume.current = false;
  };

  const handleVolumeProgressBarDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    const audioPlayer = (ref as React.RefObject<HTMLAudioElement>).current;

    if (audioPlayer) {
      if (event.buttons !== 1) {
        return;
      }

      isChangeVolume.current = true;

      const volumelineContainer = event.currentTarget;
      const volumelineContainerRect = volumelineContainer.getBoundingClientRect();
      const offsetX = event.clientX - volumelineContainerRect.left;

      const newProgress = (offsetX / volumelineContainer.offsetWidth) * 100;
      const clampedVolume = Math.max(0, Math.min(newProgress, 100));

      audioPlayer.volume = clampedVolume / 100;

      setVolume(clampedVolume);
    }
  };

  const handleProgressBarDrag = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const audioPlayer = (ref as React.RefObject<HTMLAudioElement>).current;

    if (audioPlayer) {
      if ((isTouchEvent(event) && event.touches.length !== 1) || (isMouseEvent(event) && event.buttons !== 1)) {
        return;
      }

      const timelineContainer = event.currentTarget;
      const timelineContainerRect = timelineContainer.getBoundingClientRect();

      const offsetX = isTouchEvent(event)
        ? event.touches[0].clientX - timelineContainerRect.left
        : event.clientX - timelineContainerRect.left;

      const timelineContainerWidth = timelineContainer.offsetWidth;
      const newProgress = (offsetX / timelineContainerWidth) * 100;

      setProgress(newProgress);

      const newCurrentTime = (newProgress / 100) * totalDuration;
      audioPlayer.currentTime = newCurrentTime;
    }
  };

  const handleProgressBarDragEnd = () => {
    const audioPlayer = (ref as React.RefObject<HTMLAudioElement>).current;
    if (audioPlayer) {
      if (isPlaying) {
        // Если воспроизведение активно, запускаем его
        audioPlayer.play();
      }
    }
  };

  const handleMuteButtonClick = () => {
    const audioPlayer = (ref as React.RefObject<HTMLAudioElement>).current;
    if (audioPlayer) {
      if (audioPlayer.volume === 0) {
        audioPlayer.volume = previousVolume; // Восстановить прежний уровень громкости
        setIsmuted(false);
      } else {
        setPreviousVolume(audioPlayer.volume); // Сохранить текущий уровень громкости
        audioPlayer.volume = 0; // Установить уровень громкости на 0
        setIsmuted(true);
      }
    }
  };

  const handleTimeUpdate = React.useCallback(() => {
    const audioPlayer = (ref as React.RefObject<HTMLAudioElement>).current;
    if (audioPlayer) {
      const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      setProgress(progress);

      if (progress >= 100) {
        onSetIsPlaying(false);
      }
    }
  }, [ref, onSetIsPlaying]);

  const handleCloseAudioPlayer = () => {
    const audioPlayer = (ref as React.RefObject<HTMLAudioElement>).current;

    if (audioPlayer) {
      if (isPlaying) audioPlayer.pause();
    }

    onSetIsPlaying(false);
    onClearAudioData();
    setIsAudioLoaded(false);
  };

  React.useEffect(() => {
    const audioPlayer = (ref as React.RefObject<HTMLAudioElement>).current;

    if (audioPlayer) {
      if (src && isPlaying && isAudioLoaded) {
        audioPlayer.play();
      }
    }
  }, [src, isPlaying, ref, isAudioLoaded]);

  React.useEffect(() => {
    const audioPlayer = (ref as React.RefObject<HTMLAudioElement>).current;
    if (audioPlayer) {
      audioPlayer.addEventListener('timeupdate', handleTimeUpdate);
      audioPlayer.addEventListener('ended', () => {
        onSetIsPlaying(false);
      });

      return () => {
        audioPlayer.removeEventListener('timeupdate', handleTimeUpdate);
        audioPlayer.removeEventListener('ended', () => {
          onSetIsPlaying(false);
        });
      };
    }
  }, [ref, handleTimeUpdate, onSetIsPlaying]);

  React.useEffect(() => {
    const audioPlayer = (ref as React.RefObject<HTMLAudioElement>).current;
    if (audioPlayer) {
      // Обработчик события timeupdate
      const updateTime = () => {
        setCurrentDuration(audioPlayer.currentTime);
      };

      // Привязка обработчика к событию timeupdate
      audioPlayer.addEventListener('timeupdate', updateTime);

      // Получение общей продолжительности трека
      const handleLoadedMetadata = () => {
        setTotalDuration(audioPlayer.duration);
        setIsAudioLoaded(true);
      };

      audioPlayer.addEventListener('loadedmetadata', handleLoadedMetadata);

      // Отписка от событий и очистка при размонтировании компонента
      return () => {
        audioPlayer.removeEventListener('timeupdate', updateTime);
        audioPlayer.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [ref]);

  return (
    <div className={clsx(styles.root, src && styles.rootIsOpened)}>
      <div className={styles.container}>
        <audio ref={ref} src={src} preload='auto'>
          Ваш браузер не поддерживает встроенное аудио. Попробуйте скачать его
          <a href={src} ref={audioLinkRef} download>
            по ссылке
          </a>
        </audio>
        <div className={styles.textContainer}>
          <p className={styles.authorAndTitle}>{`${author} ${title}`}</p>
          <CloseButton place='audio-player' onClick={handleCloseAudioPlayer} />
        </div>
        <div className={styles.playerContainer}>
          <PlayButton onClick={onTogglePlay} isPlaying={isPlaying} />
          <TimeCounter duration={currentDuration} />
          <TimelineContainer
            onDrag={handleProgressBarDrag}
            onDragEnd={handleProgressBarDragEnd}
            onToggleChangeTime={() => setIsChangeTime(false)}
            isVolumeContainerHovered={isVolumeContainerHovered}
            isChangeTime={isChangeTime}
            progress={progress}
            screenWidth={screenWidth}
          />
          <TimeCounter duration={totalDuration} type='right' />
          <VolumelineContainer
            onDisHoverVolumeContainer={handleDishoverVolumeContainer}
            onDrag={handleVolumeProgressBarDrag}
            onMuteButtonClick={handleMuteButtonClick}
            volume={volume}
            isVolumeContainerHovered={isVolumeContainerHovered}
            isMuted={isMuted}
            screenWidth={screenWidth}
          />
          <CTA linkText='cкачать' type='download' path={src} />
        </div>
      </div>
    </div>
  );
});
