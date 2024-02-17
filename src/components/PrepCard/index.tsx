import React from 'react';
import styles from './PrepCard.module.scss';
import clsx from 'clsx';
import { prepCardData } from '../../utils/prepCardData';
import { PrepCardItem } from '../PrepCardItem';

type PrepMaterialCardProps = {
  title: string;
};

export const PrepCard = ({ title }: PrepMaterialCardProps) => {
  const [isItemOpen, setIsItemOpen] = React.useState<boolean>(false);

  return (
    <article className={clsx(styles.root, isItemOpen && styles.rootIsOpened)}>
      <button className={styles.button} onClick={() => setIsItemOpen(!isItemOpen)}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.titleIcon}>+</span>
      </button>
      <ul className={clsx(styles.itemList, isItemOpen && styles.itemListIsOpened)}>
        {prepCardData.map((item, index) => (
          <li key={index} className={styles.itemListElement}>
            <PrepCardItem {...item} />
          </li>
        ))}
      </ul>
    </article>
  );
};
