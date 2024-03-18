import React from 'react';
import styles from './TextWithCustomLink.module.scss';
import clsx from 'clsx';

type TextWithCustomLinkProps = {
  text: string;
  linkText: string;
  linkUrl: string;
  place?: string;
};

export const TextWithCustomLink = ({ text, linkText, linkUrl, place }: TextWithCustomLinkProps) => {
  const parts = text.split(new RegExp(`(${linkText})`, 'gi'));

  return (
    <p className={clsx(styles.root, place === 'full-advert' && styles.rootTypeFullAdvert)}>
      {parts.map((part, index) => {
        if (part.toLowerCase() === linkText.toLowerCase()) {
          return (
            <a key={index} href={linkUrl} className={styles.link}>
              {part}
            </a>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </p>
  );
};
