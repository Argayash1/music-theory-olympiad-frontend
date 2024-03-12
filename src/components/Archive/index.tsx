import React from 'react';
import { ArchiveCardList, ArchiveTabs, SectionTitleContainer } from '../../components';
import styles from './Archive.module.scss';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { menuItems } from '../../utils/menuItems';
import { selectArchiveDataStetus } from '../../redux/archive/selectors';
import { fetchArchives } from '../../redux/archive/asyncActions';

export const Archive = React.forwardRef<HTMLElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const status = useSelector(selectArchiveDataStetus);

  const [сategory, setCategory] = React.useState<number>(0);

  React.useEffect(() => {
    dispatch(fetchArchives(`category=${сategory + 1}`));
  }, [dispatch, сategory]);

  return (
    <section className={styles.root} id='archive' ref={ref}>
      <SectionTitleContainer text={menuItems[3].name} />
      <ArchiveTabs value={сategory} onChangeTab={(index: number) => setCategory(index)} />
      {status === 'loading' ? <>Загрузка...</> : <ArchiveCardList />}
    </section>
  );
});
