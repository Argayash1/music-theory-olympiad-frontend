import React from 'react';
import styles from './PlayButton.module.scss';
import { selectAudioData } from '../../redux/audio/selectors';
import { useSelector } from 'react-redux';

type PlayButtonProps = {
  onClick: () => void;
};

export const PlayButton = ({ onClick }: PlayButtonProps) => {
  const { isPlaying, isAudioLoaded } = useSelector(selectAudioData);

  return (
    <button className={styles.root} onClick={onClick} disabled={!isAudioLoaded}>
      {!isPlaying ? (
        <svg className={styles.playIcon} viewBox='0 0 18 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M17.5052 10.1346L1.80124 1.04283C1.00125 0.579668 0 1.15694 0 2.08134V19.9187C0 20.8431 1.00124 21.4203 1.80124 20.9572L17.5052 11.8654C18.1705 11.4803 18.1705 10.5197 17.5052 10.1346Z'
            fill='black'
          />
        </svg>
      ) : (
        <svg
          className={styles.pauseIcon}
          width='17'
          height='20'
          viewBox='0 0 17 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='5.66667' height='19.8333' rx='1' fill='black' />
          <rect x='10.667' width='5.66667' height='19.8333' rx='1' fill='black' />
        </svg>
      )}
    </button>
  );
};
