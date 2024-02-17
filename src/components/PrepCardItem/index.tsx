import React from 'react';
import styles from './PrepCardItem.module.scss';
import { CTA } from '../CTA';

type PrepCardItemProps = {
  itemName: string;
  itemButtonText: string;
  itemButtonLink: string;
  children?: React.ReactNode;
};

export const PrepCardItem = ({ itemName, itemButtonText, itemButtonLink, children }: PrepCardItemProps) => {
  return (
    <div className={styles.root}>
      <h4 className={styles.title}>{itemName}</h4>
      {children}
      <CTA linkText={itemButtonText} type='download' path={itemButtonLink} />
    </div>
  );
};
