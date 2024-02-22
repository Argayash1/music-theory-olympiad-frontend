import React from 'react';
import styles from './PrepAccordionMenu.module.scss';
import { prepCardNames } from '../../utils/prepCardNames';
import { PrepCard } from '../../components';

export const PrepAccordionMenu = () => {
  const [openItemIndex, setOpenItemIndex] = React.useState<number | null>(null);

  const prepCards = prepCardNames.map((item, index) => (
    <li key={index}>
      <PrepCard isOpen={openItemIndex === index} title={item} onClick={() => handleItemClick(index)} />
    </li>
  ));

  const handleItemClick = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return <ul className={styles.root}>{prepCards}</ul>;
};
