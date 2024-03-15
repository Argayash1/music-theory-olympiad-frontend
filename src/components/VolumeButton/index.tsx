import React from 'react';
import styles from './VolumeButton.module.scss';

type VolumeButtonProps = {
  isMuted: boolean;
  volume: number;
  onClick: () => void;
};

export const VolumeButton = ({ isMuted, volume, onClick }: VolumeButtonProps) => {
  return (
    <button onClick={onClick} className={styles.root}>
      {isMuted || volume === 0 ? (
        <svg className={styles.iconMuted} viewBox='0 0 28 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1.6893 15.9405C0.649502 14.2075 0.649502 12.0425 1.6893 10.3095C2.0066 9.78066 2.53227 9.41021 3.13702 9.28926L5.60602 8.79546C5.75311 8.76604 5.8857 8.68715 5.98174 8.57191L10.2958 3.39498C11.4784 1.97592 12.0697 1.26638 12.5973 1.45742C13.125 1.64846 13.125 2.57207 13.125 4.41928L13.125 21.8307C13.125 23.6779 13.125 24.6015 12.5973 24.7926C12.0697 24.9836 11.4784 24.2741 10.2958 22.855L5.98174 17.6781C5.88571 17.5628 5.75311 17.484 5.60602 17.4545L3.13702 16.9607C2.53227 16.8398 2.0066 16.4693 1.6893 15.9405Z'
            fill='black'
          />
          <path d='M17 18L27 8' stroke='black' strokeWidth='2' strokeLinecap='round' />
          <path d='M27 18L17 8' stroke='black' strokeWidth='2' strokeLinecap='round' />
        </svg>
      ) : (
        <svg className={styles.icon} viewBox='0 0 28 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1.6893 15.9405C0.649502 14.2075 0.649502 12.0425 1.6893 10.3095C2.0066 9.78066 2.53227 9.41021 3.13702 9.28926L5.60602 8.79546C5.75311 8.76604 5.8857 8.68715 5.98174 8.57191L10.2958 3.39498C11.4784 1.97592 12.0697 1.26638 12.5973 1.45742C13.125 1.64846 13.125 2.57207 13.125 4.41928L13.125 21.8307C13.125 23.6779 13.125 24.6015 12.5973 24.7926C12.0697 24.9836 11.4784 24.2741 10.2958 22.855L5.98174 17.6781C5.88571 17.5628 5.75311 17.484 5.60602 17.4545L3.13702 16.9607C2.53227 16.8398 2.0066 16.4693 1.6893 15.9405Z'
            fill='black'
          />
          <path
            d='M16.8227 7.96918C18.1831 9.32959 18.9507 11.1725 18.9583 13.0964C18.9659 15.0203 18.2128 16.8693 16.8631 18.2404'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            style={{ opacity: volume >= 25 ? 1 : 0, transition: 'opacity 0.5s ease' }}
          />

          <path
            d='M22.833 4.87558C25.0097 7.05225 26.2379 10.001 26.25 13.0792C26.2621 16.1574 25.0572 19.1157 22.8977 21.3095'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            style={{ opacity: volume >= 75 ? 1 : 0, transition: 'opacity 0.5s ease' }}
          />
        </svg>
      )}
    </button>
  );
};
