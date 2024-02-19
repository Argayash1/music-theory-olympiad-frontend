import React from 'react';
import styles from './Jury.module.scss';
import { SectionTitleContainer } from '../SectionTitleContainer';
import { juryMembersData } from '../../utils/juryMembersData';
import { JuryMemberCard } from '../JuryMemberCard';

export const Jury = () => {
  return (
    <section className={styles.root} id='jury'>
      <div className={styles.container}>
        <SectionTitleContainer text='Жюри' />
        <ul className={styles.list}>
          {juryMembersData.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <JuryMemberCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
