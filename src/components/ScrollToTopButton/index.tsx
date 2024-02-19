import React from 'react';
import { handleScrollToTop } from '../../utils/utils';
import styles from './ScrollToTopButton.module.scss';
import clsx from 'clsx';

type ScrollToTopButtonProps = {
  type?: string;
};

export const ScrollToTopButton = ({ type }: ScrollToTopButtonProps) => {
  return (
    <button
      className={clsx(styles.root, type === 'footer' && styles.rootTypeFooter)}
      onClick={handleScrollToTop}
    ></button>
  );
};
