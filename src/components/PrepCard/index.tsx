import React from 'react';
import styles from './PrepCard.module.scss';
import clsx from 'clsx';
import { prepCardNamesData } from '../../utils/prepCardData';
import { ItemDataType, PrepCardItem } from '../PrepCardItem';
import { IPrepMaterial } from '../../redux/prepMaterial/types';
import { useSelector } from 'react-redux';
import { selectScreenWidth } from '../../redux/olympData/selectors';
import { CardSlider } from '../CardSlider';

type PrepMaterialCardProps = {
  prepCardData: IPrepMaterial;
  title: string;
  isOpen: boolean;
  onClick: () => void;
  onTogglePlay: (audioUrl: string, title: string, author: string) => void;
};

export const PrepCard = ({ prepCardData, title, isOpen, onClick, onTogglePlay }: PrepMaterialCardProps) => {
  const screenWidth = useSelector(selectScreenWidth);

  const [switchCount, setSwitchCount] = React.useState<number>(0);

  const accordionItemRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen && accordionItemRef.current) {
      accordionItemRef.current.scrollIntoView({ block: 'center' });
    }
  }, [isOpen]);

  const prepCardItem = Object.values(prepCardData).slice(2) as ItemDataType[];

  const prepCardItems = prepCardNamesData.map((item, index) => (
    <li key={index} className={styles.cardListItem}>
      <PrepCardItem {...item} itemData={prepCardItem[index]} onTogglePlay={onTogglePlay} />
    </li>
  ));

  const offset =
    screenWidth > 1031
      ? switchCount * -305
      : switchCount === 2 && screenWidth > 590
      ? switchCount * -327
      : switchCount === 2 && screenWidth <= 590
      ? switchCount * -311
      : switchCount === 3 && screenWidth <= 590
      ? switchCount * -308
      : screenWidth <= 590
      ? switchCount * -318
      : switchCount * -331;

  const nextButtonDisabled =
    screenWidth > 1031
      ? switchCount === 1
      : screenWidth <= 1031 && screenWidth > 727
      ? switchCount === 2
      : switchCount === 3;

  const showCardListWithoutSlider = screenWidth >= 1353 || (screenWidth <= 1279 && screenWidth > 1255);

  return (
    <article className={clsx(styles.root, isOpen && styles.rootIsOpened)} ref={accordionItemRef}>
      <button className={styles.button} onClick={onClick} type='button'>
        <span className={styles.buttonText}>{title}</span>
        <svg
          viewBox='0 0 22.5 22.5'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          className={clsx(styles.icon, isOpen && styles.iconRotated)}
        >
          <defs />
          <path
            id='Union (Stroke)'
            d='M10 0L12.5 0L12.5 10L22.5 10L22.5 12.5L12.5 12.5L12.5 22.5L10 22.5L10 12.5L0 12.5L0 10L10 10L10 0Z'
            fill='#000000'
            fillOpacity='1.000000'
            fillRule='evenodd'
          />
        </svg>
      </button>
      {showCardListWithoutSlider ? (
        <ul className={styles.cardList}>{prepCardItems}</ul>
      ) : (
        <CardSlider
          onSwitchToPrevSlides={() => setSwitchCount((prev) => prev - 1)}
          onSwitchToNextSlides={() => setSwitchCount((prev) => prev + 1)}
          switchCount={switchCount}
          nextButtonDisabled={nextButtonDisabled}
          type='prep-materials'
        >
          <ul className={styles.cardList} style={{ transform: `translateX(${offset}px)` }}>
            {prepCardItems}
          </ul>
        </CardSlider>
      )}
    </article>
  );
};
