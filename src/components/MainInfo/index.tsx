import React from 'react';
import styles from './MainInfo.module.scss';
import dateIcon from '../../assets/icons/brand-bunner-date-icon.svg';
import clockIcon from '../../assets/icons/brand-bunner-clock-icon.svg';
import LocationIcon from '../../assets/icons/brand-bunner-location-icon.svg';
import { OlympData } from '../../redux/olympData/types';

interface MainInfoProps extends Omit<OlympData, '_id' | 'topic' | 'participants' | 'olympNumber'> {}

export const MainInfo = ({ dates, registrationDates, city }: MainInfoProps) => {
  const mainInfoData = [
    { icon: dateIcon, text: dates },
    { icon: clockIcon, text: registrationDates },
    { icon: LocationIcon, text: city },
  ];

  return (
    <ul className={styles.root}>
      {mainInfoData.map((item, index) => (
        <li key={index} className={styles.listItem}>
          <div style={{ backgroundImage: `url(${item.icon})` }} className={styles.icon}></div>
          <p className={styles.text}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};
