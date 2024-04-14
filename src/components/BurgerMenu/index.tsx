import React from 'react';
import { Overlay } from '../Overlay';
import { MainMenu } from '../MainMenu';

type BurgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
};

export const BurgerMenu = ({ isOpen, onClose, activeSection }: BurgerMenuProps) => {
  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <MainMenu type='burger' isOpen={isOpen} activeSection={activeSection} onClose={onClose} />
    </Overlay>
  );
};
