import React from 'react';
import { Contacts, OlympDataCard, OlympDataCardsSkeleton, TopicAndParticipants } from '../../components';
import styles from './OlympDataCardsContainer.module.scss';
import { Status } from '../../redux/olympData/types';

type OlympDataCardsContainerProps = {
  status: Status;
};

export const OlympDataCardsContainer = ({ status }: OlympDataCardsContainerProps) => {
  return (
    <ul className={styles.root}>
      {status === 'loading' ? (
        <OlympDataCardsSkeleton />
      ) : (
        <>
          <li className={styles.listItem}>
            <OlympDataCard>
              <TopicAndParticipants />
            </OlympDataCard>
          </li>
          <li className={styles.listItem}>
            <OlympDataCard>
              <Contacts />
            </OlympDataCard>
          </li>
        </>
      )}
    </ul>
  );
};
