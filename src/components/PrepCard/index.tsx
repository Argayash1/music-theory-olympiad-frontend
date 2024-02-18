import React from 'react';
import styles from './PrepCard.module.scss';
import clsx from 'clsx';
import { prepCardData, prepCardItemData } from '../../utils/prepCardData';
import { ItemDataType, PrepCardItem } from '../PrepCardItem';

type PrepMaterialCardProps = {
  title: string;
};

export const PrepCard = ({ title }: PrepMaterialCardProps) => {
  const [isItemOpen, setIsItemOpen] = React.useState<boolean>(false);
  const accordionItemRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isItemOpen && accordionItemRef.current) {
      accordionItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isItemOpen]);

  const prepCardItem = Object.values(prepCardItemData).slice(2) as ItemDataType[];

  return (
    <article className={clsx(styles.root, isItemOpen && styles.rootIsOpened)} ref={accordionItemRef}>
      <button className={styles.button} onClick={() => setIsItemOpen(!isItemOpen)}>
        <h3 className={styles.title}>{title}</h3>
        <span className={clsx(styles.titleIcon, isItemOpen && styles.titleIconRotated)}>+</span>
      </button>
      <ul className={clsx(styles.itemList, isItemOpen && styles.itemListIsOpened)}>
        {prepCardData.map((item, index) => (
          <li key={index} className={styles.itemListElement}>
            <PrepCardItem {...item} itemData={prepCardItem[index]} />
          </li>
        ))}
      </ul>
    </article>
  );
};
