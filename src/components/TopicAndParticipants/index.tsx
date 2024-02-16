import React from 'react';
import { OlympDataCardTitle } from '../../components';
import styles from './TopicAndParticipants.module.scss';
import clsx from 'clsx';

export const TopicAndParticipants = () => {
  return (
    <ul className={styles.root}>
      <li className={styles.listItem}>
        <OlympDataCardTitle title='Тематика:' />
        <p className={styles.paragraph}>«А. Брукнер, Б. Сметана, К. Райнеке: к 200-летию со дня рождения».</p>
      </li>
      <li className={styles.listItem}>
        <OlympDataCardTitle title='Участники:' />
        <p className={styles.paragraph}>
          Студенты средних профессиональных образовательных организаций в сфере культуры и искусства и учащиеся 9 – 12
          классов средних специальных музыкальных школ.
        </p>
      </li>
    </ul>
  );
};
