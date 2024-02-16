import React from 'react';
import styles from './MainInfo.module.scss';
import dateIcon from '../../assets/images/brand-bunner-date-icon.svg';
import clockIcon from '../../assets/images/brand-bunner-clock-icon.svg';
import LocationIcon from '../../assets/images/brand-bunner-location-icon.svg';

const mainInfoData = [
  { icon: dateIcon, text: '13–14 апреля 2024 года' },
  { icon: clockIcon, text: 'Прием заявок до 29 марта 2024 года (включительно)' },
  { icon: LocationIcon, text: 'г. Екатеринбург' },
];

export const MainInfo = () => {
  return (
    <ul className={styles.root}>
      {mainInfoData.map((item, index) => (
        <li key={index} className={styles.listItem}>
          <div style={{ backgroundImage: `url(${item.icon})` }} className={styles.icon}></div>
          {item.text}
        </li>
      ))}
    </ul>
  );
};
