import React from 'react';
import { prepCardNames } from '../../utils/prepCardNames';
import clsx from 'clsx';
import { OLYMPIC_RULES_URL } from '../../utils/constants';
import styles from './DownloadMenu.module.scss';
import { CTA } from '../CTA';

type DownloadMenuProps = {
  isOpen: boolean;
};

export const DownloadMenu = ({ isOpen }: DownloadMenuProps) => {
  return (
    <ul className={clsx(styles.root, isOpen && styles.rootIsOpened)}>
      {prepCardNames.map((prepCardName, index) => (
        <li key={index}>
          <CTA linkText={prepCardName} type='download-archive' path={OLYMPIC_RULES_URL} />
        </li>
      ))}
    </ul>
  );
};
