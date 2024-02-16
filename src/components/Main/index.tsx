import React from 'react';
import styles from './Main.module.scss';
import { AboutMusOlymp, Announcements, BrandBunner } from '../../components';

export const Main = () => {
  return (
    <main className={styles.root}>
      <BrandBunner />
      <AboutMusOlymp />
      <Announcements />
    </main>
  );
};
