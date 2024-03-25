import React from 'react';
import styles from './Results.module.scss';
import { SectionTitle } from '../SectionTitle';
import { prepCardNames } from '../../utils/prepCardNames';
import { CTA } from '../CTA';
import { useAppDispatch } from '../../redux/store';
import { fetchResults } from '../../redux/result/asyncActions';
import { selectResultData } from '../../redux/result/selectors';
import { useSelector } from 'react-redux';
import { menuItems } from '../../utils/menuItems';
import { ResultItemSkeleton } from '../ResultItemSkeleton';

export const Results = React.forwardRef<HTMLElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectResultData);

  React.useEffect(() => {
    dispatch(fetchResults());
  }, [dispatch]);

  const resultItems = prepCardNames.map((item, index) => (
    <li key={index}>
      <p className={styles.text}>{item}</p>
      <CTA
        linkText='Скачать результаты'
        path={items[index] && items[index].url ? items[index].url : undefined}
        type='download'
      />
    </li>
  ));

  const resultItemsSkeletons = [...new Array(4)].map((_, index) => (
    <li key={index}>
      <ResultItemSkeleton />
    </li>
  ));

  return (
    <section className={styles.root} id='results' ref={ref}>
      <div className={styles.container}>
        <SectionTitle text={menuItems[4].name} />
        <ul className={styles.list}>{status === 'loading' ? resultItemsSkeletons : resultItems}</ul>
      </div>
    </section>
  );
});
