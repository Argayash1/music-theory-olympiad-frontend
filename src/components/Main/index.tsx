import React from 'react';
import styles from './Main.module.scss';
import { AboutMusOlymp, Adverts, BrandBunner, PrepMaterials } from '../../components';

export const Main = () => {
  return (
    <main className={styles.root}>
      <BrandBunner />
      <AboutMusOlymp />
      <Adverts />
      <PrepMaterials />
    </main>
  );
};
