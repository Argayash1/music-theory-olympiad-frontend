import React from 'react';
import { Contacts, OlympDataCard, TopicAndParticipants } from '../../components';
import styles from './OlympDataCardsContainer.module.scss';

export const OlympDataCardsContainer = () => {
  return (
    <ul className={styles.root}>
      <li>
        <OlympDataCard>
          <TopicAndParticipants />
        </OlympDataCard>
      </li>
      <li>
        <OlympDataCard type='contacts'>
          <Contacts />
        </OlympDataCard>
      </li>
    </ul>
  );
};
