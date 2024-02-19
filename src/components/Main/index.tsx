import React from 'react';
import styles from './Main.module.scss';
import { AboutMusOlymp, Adverts, Archive, BrandBunner, Jury, PrepMaterials, Results } from '../../components';

export const Main = () => {
  return (
    <main className={styles.root}>
      <BrandBunner />
      <AboutMusOlymp />
      <Adverts />
      <PrepMaterials />
      <Archive />
      <Results />
      <Jury />
    </main>
  );
};
