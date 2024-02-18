import React from 'react';
import styles from './PrepCardItemContent.module.scss';
import { ItemDataType } from '../PrepCardItem';
import clsx from 'clsx';

type DictationsProps = {
  itemData: ItemDataType;
};

export const PrepCardItemContent = ({ itemData }: DictationsProps) => {
  const handleSelect = (itemData: ItemDataType) => {
    if ('tableUrl' in itemData) {
      return (
        <div className={styles.root}>
          <button className={styles.button}></button>
          <p className={styles.text}>{itemData.author}</p>
          <p className={styles.text}>{itemData.title}</p>
          <img src={itemData.imageUrl} alt='' className={styles.tableImage} />
        </div>
      );
    } else if ('data' in itemData) {
      return (
        <ul className={clsx(styles.root, styles.rootTypeList)}>
          {itemData.data.map((item, index) => (
            <li key={index}>
              <button className={styles.button}></button>
              <p className={styles.text}>{item.author}</p>
              <p className={styles.text}>{item.title}</p>
            </li>
          ))}
        </ul>
      );
    } else {
      return <img src={itemData.imageUrl} alt='' className={clsx(styles.root, styles.rootTypeImage)} />;
    }
  };

  return handleSelect(itemData);
};
