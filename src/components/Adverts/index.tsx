import React from 'react';
import styles from './Adverts.module.scss';
import { SectionTitleContainer, AdvertCardList, FullAdvert, AdvertCardType } from '../../components';
import { cards } from '../../utils/constants';

export const Adverts = React.forwardRef<HTMLElement>((props, ref) => {
  const [cardId, setCardId] = React.useState<number | null>(null);
  const [adverCardItem, setAdverCardItem] = React.useState<AdvertCardType | undefined>(undefined);

  React.useEffect(() => {
    if (cardId) {
      const advertCard = cards.find((card) => card._id === cardId);
      setAdverCardItem(advertCard);
    } else {
      setAdverCardItem(undefined);
    }
  }, [cardId]);

  return (
    <section className={styles.root} id='adverts' ref={ref}>
      <SectionTitleContainer text='Объявления' />
      {!adverCardItem ? (
        <AdvertCardList advertCardsItems={cards} onCtaClick={(_id) => setCardId(_id)} />
      ) : (
        <FullAdvert onClose={() => setCardId(null)} advertItem={adverCardItem} />
      )}
    </section>
  );
});
