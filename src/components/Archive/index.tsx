import React from 'react';
import { ArchiveCardList, ArchiveTabs, SectionTitleContainer } from '../../components';
import styles from './Archive.module.scss';

export const Archive = () => {
  const [сategory, setCategory] = React.useState<number>(0);

  return (
    <section className={styles.root} id='archive'>
      <SectionTitleContainer text='Архив' />
      <ArchiveTabs value={сategory} onChangeTab={(index: number) => setCategory(index)} />
      <ArchiveCardList />
    </section>
  );
};
