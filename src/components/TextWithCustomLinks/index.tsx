import React from 'react';
import styles from './TextWithCustomLinks.module.scss';
import clsx from 'clsx';
import { LinkData } from '../../redux/advert/types';

type TextWithCustomLinkProps = {
  text: string;
  links: LinkData[];
  place?: string;
};

export const TextWithCustomLinks = ({ text, links, place }: TextWithCustomLinkProps) => {
  const linkMapping = new Map<string, string>();
  links.forEach(({ linkText, linkUrl }) => {
    linkMapping.set(linkText.toLowerCase(), linkUrl);
  });

  const regex = new RegExp(`(${[...linkMapping.keys()].join('|')})`, 'gi');
  const paragraphs = text.split('\n');

  return (
    <div className={clsx(styles.root, place === 'full-advert' && styles.rootTypeFullAdvert)}>
      {paragraphs.map((paragraph, pIndex) => (
        <p key={pIndex} className={styles.text}>
          {paragraph.split(regex).map((part, index) => {
            const linkUrl = linkMapping.get(part.toLowerCase());
            if (linkUrl) {
              return (
                <a key={index} href={linkUrl} className={styles.link}>
                  {part}
                </a>
              );
            }
            return <React.Fragment key={index}>{part}</React.Fragment>;
          })}
        </p>
      ))}
    </div>
  );
};
