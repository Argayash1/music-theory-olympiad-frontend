import React from 'react';
import styles from './PrepAccordionMenu.module.scss';
import { prepCardNames } from '../../utils/prepCardNames';
import { PrepCard } from '../../components';

type PrepAccordionMenuProps = {
  isPlaying: boolean;
  onTogglePlay: (audioUrl: string) => void;
};

export const PrepAccordionMenu = ({ isPlaying, onTogglePlay }: PrepAccordionMenuProps) => {
  const [openItemIndex, setOpenItemIndex] = React.useState<number | null>(null);

  const prepCards = prepCardNames.map((item, index) => (
    <li key={index}>
      <PrepCard
        isOpen={openItemIndex === index}
        title={item}
        onClick={() => setOpenItemIndex(openItemIndex === index ? null : index)}
        isPlaying={isPlaying}
        onTogglePlay={onTogglePlay}
      />
    </li>
  ));

  return <ul className={styles.root}>{prepCards}</ul>;
};
