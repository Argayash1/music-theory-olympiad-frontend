import React from 'react';
import styles from './JuryMemberCard.module.scss';

type JuryMemberCardProps = {
  name: string;
  patronymic: string;
  surname: string;
  about: string;
  imageUrl: string;
  link: string;
};

export const JuryMemberCard = ({ name, patronymic, surname, about, imageUrl, link }: JuryMemberCardProps) => {
  return (
    <div className={styles.root}>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={imageUrl} alt={name} className={styles.image} />
      </a>
      <h3 className={styles.title}>{surname + ' ' + name + ' ' + patronymic}</h3>
      <p className={styles.description}>{about}</p>
    </div>
  );
};
