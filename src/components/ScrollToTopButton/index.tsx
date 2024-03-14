import React from 'react';
import { handleScrollToTop } from '../../utils/utils';
import styles from './ScrollToTopButton.module.scss';
import clsx from 'clsx';

type ScrollToTopButtonProps = {
  activeSection: string;
};

export const ScrollToTopButton = ({ activeSection }: ScrollToTopButtonProps) => {
  return (
    <button className={clsx(styles.root, activeSection && styles.rootVisible)} onClick={handleScrollToTop}></button>
  );
};
