import React from 'react';
import { handleScrollToTop } from '../../utils/utils';
import styles from './ScrollToTopButton.module.scss';
import clsx from 'clsx';

type ScrollToTopButtonProps = {
  activeSection: string;
  isPlayerOpen: boolean;
};

export const ScrollToTopButton = ({ activeSection, isPlayerOpen }: ScrollToTopButtonProps) => {
  return (
    <button
      className={clsx(styles.root, activeSection && styles.rootVisible, isPlayerOpen && styles.rootTypePlayerOpen)}
      onClick={handleScrollToTop}
    ></button>
  );
};
