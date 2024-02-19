import React from 'react';
import styles from './AdvertCard.module.scss';
import { CTA } from '../../components';
import clsx from 'clsx';
import { prepCardNames } from '../../utils/prepCardNames';
import { OLYMPIC_RULES_URL } from '../../utils/constants';

type AdvertCardProps = {
  _id?: number;
  createdAt?: string;
  title: string;
  content?: string;
  extensions?: string[];
};

export const AdvertCard = ({ _id, createdAt, title, content, extensions }: AdvertCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  return (
    <article className={clsx(styles.root, !createdAt && styles.rootBgGrey)}>
      {createdAt && <span className={styles.date}>{createdAt}</span>}
      <h3 className={clsx(styles.title, !createdAt && styles.titleTypeArchive)}>{title}</h3>
      {createdAt && <p className={styles.text}>{content}</p>}
      {createdAt && <CTA linkText='Узнать больше' type='learn' />}
      {!createdAt && (
        <ul className={styles.advertList}>
          {extensions?.map((extension, index) => (
            <li key={index} className={styles.advertListItem}>
              <div className={styles.advertListItemIcon}></div>
              <span className={styles.advertListItemSpan}>{extension}</span>
            </li>
          ))}
        </ul>
      )}
      {!createdAt && (
        <div className={styles.downLoadBlock}>
          <button className={styles.downLoadButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Загрузить
          </button>
          <ul className={clsx(styles.downLoadList, isMenuOpen && styles.downLoadListIsOpened)}>
            {prepCardNames.map((prepCardName, index) => (
              <li key={index}>
                <CTA linkText={prepCardName} type='download-archive' path={OLYMPIC_RULES_URL} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};
