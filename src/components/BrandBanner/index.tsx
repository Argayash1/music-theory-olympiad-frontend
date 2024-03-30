import React from 'react';
import { BrandBannerSkeleton, CTA, Logo, LogoContainer, MainInfo } from '../../components';
import styles from './BrandBanner.module.scss';
import { useSelector } from 'react-redux';
import { selectOlympData, selectScreenWidth } from '../../redux/olympData/selectors';

export const BrandBanner = React.forwardRef<HTMLElement>((props, ref) => {
  const { items, status } = useSelector(selectOlympData);
  const screenWidth = useSelector(selectScreenWidth);

  const isHoverSupported = window.matchMedia('(hover: hover)').matches;

  const desktopOffset = isHoverSupported ? 87 : 70;

  const backgroundLeftOffset =
    screenWidth > 1376
      ? desktopOffset
      : screenWidth <= 1376 && screenWidth > 1323
      ? 96
      : isHoverSupported
      ? screenWidth - 1193
      : screenWidth - 1210;

  const backgroundWidth =
    screenWidth > 1376 ? screenWidth : screenWidth <= 1376 && screenWidth > 1323 ? 1350 : screenWidth;

  return (
    <section className={styles.root} ref={ref}>
      <LogoContainer />
      {status === 'loading' ? (
        <BrandBannerSkeleton />
      ) : (
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
          {/* <div
            className={styles.backgroundImage}
            style={{ width: `${backgroundWidth}px`, left: `-${backgroundLeftOffset}px` }}
          ></div> */}
        </div>
      )}
    </section>
  );
});
