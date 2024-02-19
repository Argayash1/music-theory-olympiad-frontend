import React from 'react';
import styles from './PrepCard.module.scss';
import clsx from 'clsx';
import { prepCardData, prepCardItemData } from '../../utils/prepCardData';
import { ItemDataType, PrepCardItem } from '../PrepCardItem';

type PrepMaterialCardProps = {
  title: string;
  isOpen: boolean;
  onClick: () => void;
};

export const PrepCard = ({ title, isOpen, onClick }: PrepMaterialCardProps) => {
  const accordionItemRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen && accordionItemRef.current) {
      accordionItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isOpen]);

  const prepCardItem = Object.values(prepCardItemData).slice(2) as ItemDataType[];

  return (
    <article className={clsx(styles.root, isOpen && styles.rootIsOpened)} ref={accordionItemRef}>
      <button className={styles.button} onClick={onClick}>
        <h3 className={styles.title}>{title}</h3>
        <span className={clsx(styles.titleIcon, isOpen && styles.titleIconRotated)}>+</span>
      </button>
      <ul className={clsx(styles.itemList, isOpen && styles.itemListIsOpened)}>
        {prepCardData.map((item, index) => (
          <li key={index} className={styles.itemListElement}>
            <PrepCardItem {...item} itemData={prepCardItem[index]} />
          </li>
        ))}
      </ul>
    </article>
  );
};
