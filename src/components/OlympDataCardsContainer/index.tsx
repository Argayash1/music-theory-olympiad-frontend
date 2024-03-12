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
        </>
      )}
    </ul>
  );
};
