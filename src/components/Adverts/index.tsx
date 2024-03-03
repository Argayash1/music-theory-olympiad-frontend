import React from 'react';
import styles from './Adverts.module.scss';
import { SectionTitleContainer, AdvertCardList, FullAdvert, AdvertCardType } from '../../components';
import { cards } from '../../utils/constants';

export const Adverts = React.forwardRef<HTMLElement>((props, ref) => {
  const [cardId, setCardId] = React.useState<number | null>(null);
  const [adverCardItem, setAdverCardItem] = React.useState<AdvertCardType | null>(null);

  React.useEffect(() => {
    if (cardId) {
      const advertCard = cards.find((card) => card._id === cardId);
      if (advertCard) {
        setTimeout(() => setAdverCardItem(advertCard), 200);
      }
    } else {
      setTimeout(() => setAdverCardItem(null), 500);
    }
  }, [cardId]);

  return (
    <section className={styles.root} id='adverts' ref={ref}>
      <SectionTitleContainer text='Объявления' />
      <AdvertCardList advertCardsItems={cards} onCtaClick={(cardId) => setCardId(cardId)} cardId={cardId} />
      <FullAdvert onClose={() => setCardId(null)} advertItem={adverCardItem} cardId={cardId} />
    </section>
  );
});
