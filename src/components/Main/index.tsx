import React from 'react';
import styles from './Main.module.scss';
import { BrandBunner } from '../../components';

export const Main = () => {
  return (
    <main className={styles.root}>
      <BrandBunner />
    </main>
  );
};
