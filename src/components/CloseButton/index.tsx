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
    ></button>
  );
};
