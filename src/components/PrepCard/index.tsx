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
        <svg
          width='22.500000'
          height='22.500000'
          viewBox='0 0 22.5 22.5'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          className={clsx(styles.titleIcon, isOpen && styles.titleIconRotated)}
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id='Union (Stroke)'
            d='M10 0L12.5 0L12.5 10L22.5 10L22.5 12.5L12.5 12.5L12.5 22.5L10 22.5L10 12.5L0 12.5L0 10L10 10L10 0Z'
            fill='#000000'
            fillOpacity='1.000000'
            fillRule='evenodd'
          />
        </svg>
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
