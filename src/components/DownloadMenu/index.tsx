import React from 'react';
import { prepCardNames } from '../../utils/prepCardNames';
import styles from './DownloadMenu.module.scss';
import { CTA } from '../../components';

type DownloadMenuProps = {
  buttonLinks: string[];
};

export const DownloadMenu = ({ buttonLinks }: DownloadMenuProps) => {
  return (
    <ul className={styles.root}>
      {prepCardNames.map((prepCardName, index) => (
        <li key={index}>
          <CTA linkText={prepCardName} type='download-archive' path={buttonLinks[index]} />
        </li>
      ))}
    </ul>
  );
};
