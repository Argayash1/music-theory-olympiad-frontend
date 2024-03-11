import React from 'react';
import styles from './Results.module.scss';
import { SectionTitleContainer } from '../SectionTitleContainer';
import { prepCardNames } from '../../utils/prepCardNames';
import { CTA } from '../CTA';
import { useAppDispatch } from '../../redux/store';
import { fetchResults } from '../../redux/result/asyncActions';
import { selectResultData } from '../../redux/result/selectors';
import { useSelector } from 'react-redux';

export const Results = React.forwardRef<HTMLElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectResultData);

  React.useEffect(() => {
    dispatch(fetchResults());
  }, [dispatch]);

  return (
    <section className={styles.root} id='results' ref={ref}>
      <div className={styles.container}>
        <SectionTitleContainer text='Результаты' />
        <ul className={styles.list}>
          {status === 'loading' ? (
            <>Загрузка...</>
          ) : (
            prepCardNames.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <p className={styles.text}>{item}</p>
                <CTA
                  linkText='Скачать результаты'
                  path={items[index] && items[index].url ? items[index].url : undefined}
                  type='download'
                />
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
});
