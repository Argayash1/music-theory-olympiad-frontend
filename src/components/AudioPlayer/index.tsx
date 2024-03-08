import React from 'react';
import styles from './AudioPlayer.module.scss';
import { PlayButton, TimeCounter, TimelineContainer, VolumelineContainer, CloseButton } from '../../components';
import clsx from 'clsx';

type AudioPlayerProps = {
  src: string;
  screenWidth: number;
  isPlaying: boolean;
  onSetIsPlaying: (isPlaying: boolean) => void;
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

export const AudioPlayer = ({ src, screenWidth, isPlaying, onSetIsPlaying }: AudioPlayerProps) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const audioLinkRef = React.useRef<HTMLAnchorElement>(null);
  const isChangeVolume = React.useRef<boolean>(false);

  const [isPlayerVisible, setIsPlayerVisible] = React.useState<boolean>(false);
  const [progress, setProgress] = React.useState<number>(0);
  const [totalDuration, setTotalDuration] = React.useState<number>(0);
  const [currentDuration, setCurrentDuration] = React.useState<number>(0);
  const [isVolumeContainerHovered, setIsVolumeContainerHovered] = React.useState<boolean>(false);
  const [previousVolume, setPreviousVolume] = React.useState<number>(1);
  const [isMuted, setIsmuted] = React.useState<boolean>(false);
  const [volume, setVolume] = React.useState<number>(100);
  const [isChangeTime, setIsChangeTime] = React.useState<boolean>(false);

  const handleDishoverVolumeContainer = () => {
    setIsVolumeContainerHovered(false);
    isChangeVolume.current = false;
  };

  const handleVolumeProgressBarDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    const audioPlayer = audioRef.current;

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
    const audioPlayer = audioRef.current;

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
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      if (isPlaying) {
        // Если воспроизведение активно, запускаем его
        audioPlayer.play();
      }
    }
  };

  const handleMuteButtonClick = () => {
    const audioPlayer = audioRef.current;
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

  const handleDownload = () => {
    const audioPlayerLink = audioLinkRef.current;
    if (audioPlayerLink) {
      audioPlayerLink.click(); // Запускаем скачивание аудиотрека
    }
  };

  const handleTimeUpdate = () => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      setProgress(progress);

      if (progress >= 100) {
        onSetIsPlaying(false);
      }
    }
  };

  const togglePlay = () => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      if (isPlaying) {
        audioPlayer.pause();
      } else {
        audioPlayer.play();
      }
      onSetIsPlaying(!isPlaying);
    }
  };

  const handleCloseAudioPlayer = () => {
    const audioPlayer = audioRef.current;

    if (audioPlayer) {
      if (isPlaying) audioPlayer.pause();
    }

    onSetIsPlaying(false);
    setIsPlayerVisible(false);
  };

  React.useEffect(() => {
    const audioPlayer = audioRef.current;

    if (isPlaying) {
      setIsPlayerVisible(true);
      if (audioPlayer) audioPlayer.play();
    }
  }, [isPlaying]);

  React.useEffect(() => {
    const audioPlayer = audioRef.current;
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
  }, []);

  React.useEffect(() => {
    const audioPlayer = audioRef.current;
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
      };

      audioPlayer.addEventListener('loadedmetadata', handleLoadedMetadata);

      // Отписка от событий и очистка при размонтировании компонента
      return () => {
        audioPlayer.removeEventListener('timeupdate', updateTime);
        audioPlayer.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  return (
    <div className={clsx(styles.root, isPlayerVisible && styles.rootIsOpened)}>
      <div className={styles.container}>
        <audio ref={audioRef} src={src}>
          Ваш браузер не поддерживает встроенное аудио. Попробуйте скачать его
          <a href={src} ref={audioLinkRef} download>
            по ссылке
          </a>
        </audio>
        <div className={styles.textContainer}>
          <p className={styles.authorAndTitle}>ФИО Название произведения</p>
          <CloseButton place='audio-player' onClick={handleCloseAudioPlayer} />
        </div>
        <div className={styles.playerContainer}>
          <PlayButton onClick={togglePlay} isPlaying={isPlaying} />
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
          <TimeCounter duration={totalDuration} />
          <VolumelineContainer
            onHover={() => setIsVolumeContainerHovered(true)}
            onDisHover={() => !isChangeVolume.current && setIsVolumeContainerHovered(false)}
            onDisHoverVolumeContainer={handleDishoverVolumeContainer}
            onDrag={handleVolumeProgressBarDrag}
            onMuteButtonClick={handleMuteButtonClick}
            volume={volume}
            isVolumeContainerHovered={isVolumeContainerHovered}
            isChangeVolume={isChangeVolume.current}
            isMuted={isMuted}
            screenWidth={screenWidth}
          />
        </div>
      </div>
    </div>
  );
};
