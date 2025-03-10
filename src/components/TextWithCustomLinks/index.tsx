import React from 'react';
import styles from './TextWithCustomLinks.module.scss';
import clsx from 'clsx';

type TextWithCustomLinkProps = {
  text: string;
  place?: string;
  isShowFullText?: boolean;
};

export const TextWithCustomLinks = ({ text, place, isShowFullText }: TextWithCustomLinkProps) => {
  return (
    <div
      className={clsx(
        styles.root,
        place === 'full-advert' && styles.rootTypeFullAdvert,
        place !== 'full-advert' && isShowFullText && styles.rootTypeFullText
      )}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};
