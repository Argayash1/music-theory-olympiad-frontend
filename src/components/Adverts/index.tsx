import React from 'react';
import styles from './Adverts.module.scss';
import { SectionTitleContainer, AdvertCardList, FullAdvert } from '../../components';
import { useAppDispatch } from '../../redux/store';
import { fetchAdvertById, fetchAdverts } from '../../redux/advert/asyncActions';
import { selectAdvertData } from '../../redux/advert/selectors';
import { useSelector } from 'react-redux';
import { clearAdverCardItem, setAdvertId } from '../../redux/advert/slice';

export const Adverts = React.forwardRef<HTMLElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const { items, advertId, adverCardItem } = useSelector(selectAdvertData);

  React.useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  React.useEffect(() => {
    if (advertId) {
      dispatch(fetchAdvertById(advertId));
    } else {
      setTimeout(() => dispatch(clearAdverCardItem()), 500);
    }
  }, [advertId, dispatch]);

  return (
    <section className={styles.root} id='adverts' ref={ref}>
      <SectionTitleContainer text='Объявления' />
      <AdvertCardList advertCardsItems={items} onCtaClick={(cardId) => dispatch(setAdvertId(cardId))} />
      <FullAdvert onClose={() => dispatch(setAdvertId(null))} advertItem={adverCardItem} cardId={advertId} />
    </section>
  );
});
