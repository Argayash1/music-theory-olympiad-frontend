import React from 'react';
import { prepCardNames } from '../../utils/prepCardNames';
import clsx from 'clsx';
import styles from './DownloadMenu.module.scss';
import { CTA } from '../../components';

type DownloadMenuProps = {
  buttonLinks: string[];
  isOpen: boolean;
};

export const DownloadMenu = ({ buttonLinks, isOpen }: DownloadMenuProps) => {
  return (
    <ul className={clsx(styles.root, isOpen && styles.rootIsOpened)}>
      {prepCardNames.map((prepCardName, index) => (
        <li key={index}>
          <CTA linkText={prepCardName} type='download-archive' path={buttonLinks[index]} />
        </li>
      ))}
    </ul>
  );
};
