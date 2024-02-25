import React from 'react';
import styles from './Main.module.scss';
import { AboutMusOlymp, Adverts, Archive, BrandBunner, Jury, PrepMaterials, Results } from '../../components';
import clsx from 'clsx';

export const Main = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

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
