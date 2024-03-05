import React from 'react';
import styles from './CloseButton.module.scss';
import clsx from 'clsx';

type CloseButtonProps = {
  onClick: () => void;
  place?: string;
};

export const CloseButton = ({ onClick, place }: CloseButtonProps) => {
  return (
    <button
      type='button'
      className={clsx(styles.root, place === 'adverts' && styles.rootPlaceAdverts)}
      onClick={onClick}
    >
      <svg className={styles.icon} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.9807 0.0710677L17.7485 1.83883L10.6774 8.90991L17.7485 15.981L15.9807 17.7487L8.90966 10.6777L1.8386 17.7487L0.0708327 15.981L7.1419 8.9099L0.0708307 1.83884L1.8386 0.0710704L8.90967 7.14214L15.9807 0.0710677Z'
          fill='black'
        />
      </svg>
    </button>
  );
};
