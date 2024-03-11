import React from 'react';
import { CTA, Logo, LogoContainer, MainInfo } from '../../components';
import styles from './BrandBunner.module.scss';
import { useSelector } from 'react-redux';
import { selectOlympData } from '../../redux/olympData/selectors';

export const BrandBunner = React.forwardRef<HTMLElement>((props, ref) => {
  const { items, status } = useSelector(selectOlympData);

  return (
    <section className={styles.root} ref={ref}>
      {status === 'loading' ? (
        <>Загрузка...</>
      ) : (
        <>
          <LogoContainer />
          <div className={styles.mainContainer}>
            <h1 className={styles.pageTitle}>
              {items[0].olympNumber} Всероссийская <span className={styles.pageTitleSpan}>олимпиада</span> по
              музыкально-теоретическим предметам им. З. А. Визеля
            </h1>
            <MainInfo dates={items[0].dates} registrationDates={items[0].registrationDates} city={items[0].city} />
            <CTA
              path='https://docs.google.com/forms/d/e/1FAIpQLSf9TSakRFx8GSTfv1A53a4aQjkR-CW6NDznfeEhQQ-mgn8VOw/viewform'
              type='brand-bunner'
            />
            <Logo place='brand-bunner' />
          </div>
        </>
      )}
    </section>
  );
});
