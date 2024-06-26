import React from 'react';
import styles from './PrepAccordionMenu.module.scss';
import { prepCardNames } from '../../utils/prepCardNames';
import { PrepCard, PrepCardSkeleton } from '../../components';
import { useSelector } from 'react-redux';
import { selectPrepMaterialsData } from '../../redux/prepMaterial/selectors';

type PrepAccordionMenuProps = {
  onTogglePlay: (audioUrl: string, title: string, author: string) => void;
};

export const PrepAccordionMenu = ({ onTogglePlay }: PrepAccordionMenuProps) => {
  const { items, status } = useSelector(selectPrepMaterialsData);

  const [openItemIndex, setOpenItemIndex] = React.useState<number | null>(null);

  const prepCards = prepCardNames.map((item, index) => (
    <li key={index}>
      <PrepCard
        isOpen={openItemIndex === index}
        title={item}
        onClick={() => setOpenItemIndex(openItemIndex === index ? null : index)}
        onTogglePlay={onTogglePlay}
        prepCardData={items[index]}
      />
    </li>
  ));

  const prepCardSkeletons = [...new Array(4)].map((_, index) => (
    <li key={index}>
      <PrepCardSkeleton />
    </li>
  ));

  return <ul className={styles.root}>{status === 'loading' ? prepCardSkeletons : prepCards}</ul>;
};
