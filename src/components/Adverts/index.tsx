import React from 'react';
import styles from './Adverts.module.scss';
import { SectionTitle, AdvertCardList, FullAdvert } from '../../components';
import { useAppDispatch } from '../../redux/store';
import { fetchAdvertById, fetchAdverts } from '../../redux/advert/asyncActions';
import { selectAdvertData } from '../../redux/advert/selectors';
import { useSelector } from 'react-redux';
import { clearAdverCardItem, setAdvertId } from '../../redux/advert/slice';
import { menuItems } from '../../utils/menuItems';
import { selectScreenWidth } from '../../redux/olympData/selectors';

export const Adverts = React.forwardRef<HTMLElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const { items, advertId, adverCardItem, status } = useSelector(selectAdvertData);
  const screenWidth = useSelector(selectScreenWidth);

  React.useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  React.useEffect(() => {
    if (advertId && screenWidth > 375) {
      dispatch(fetchAdvertById(advertId));
    } else {
      setTimeout(() => dispatch(clearAdverCardItem()), 500);
    }
  }, [advertId, screenWidth, dispatch]);

  return (
    <section className={styles.root} id='announcements' ref={ref}>
      <SectionTitle text={menuItems[1].name} />
      <AdvertCardList advertCardsItems={items} onCtaClick={(cardId) => dispatch(setAdvertId(cardId))} status={status} />
      <FullAdvert advertItem={adverCardItem} cardId={advertId} />
    </section>
  );
});
