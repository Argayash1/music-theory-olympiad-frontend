import React from 'react';
import { OlympDataCardTitle } from '../../components';
import styles from './TopicAndParticipants.module.scss';
import { useSelector } from 'react-redux';
import { selectOlympDataItem } from '../../redux/olympData/selectors';

export const TopicAndParticipants = () => {
  const { topic, participants } = useSelector(selectOlympDataItem);

  return (
    <ul className={styles.root}>
      <li className={styles.listItem}>
        <OlympDataCardTitle title='Тематика:' />
        <p className={styles.paragraph}>{topic}</p>
      </li>
      <li className={styles.listItem}>
        <OlympDataCardTitle title='Участники:' />
        <p className={styles.paragraph}>{participants}</p>
      </li>
    </ul>
  );
};
