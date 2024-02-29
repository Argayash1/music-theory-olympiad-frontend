import React from 'react';
import { ArchiveCardList, ArchiveTabs, SectionTitleContainer } from '../../components';
import styles from './Archive.module.scss';

export const Archive = React.forwardRef<HTMLElement>((props, ref) => {
  const [сategory, setCategory] = React.useState<number>(0);

  return (
    <section className={styles.root} id='archive' ref={ref}>
      <SectionTitleContainer text='Архив' />
      <ArchiveTabs value={сategory} onChangeTab={(index: number) => setCategory(index)} />
      <ArchiveCardList />
    </section>
  );
});
