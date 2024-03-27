import React from 'react';
import styles from './BurgerButton.module.scss';
import clsx from 'clsx';

type BurgerButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const BurgerButton = ({ isOpen, onToggle }: BurgerButtonProps) => {
  return (
    <button className={clsx(styles.root, isOpen && styles.rootActive)} onClick={onToggle}>
      <span className={clsx(styles.line, isOpen && styles.lineHidden)}></span>
    </button>
  );
};
