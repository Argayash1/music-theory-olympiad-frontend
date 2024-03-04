import React from 'react';
import styles from './JuryMemberCard.module.scss';

type JuryMemberCardProps = {
  name: string;
  about: string;
  imageUrl: string;
  link: string;
};

export const JuryMemberCard = ({ name, about, imageUrl, link }: JuryMemberCardProps) => {
  return (
    <div className={styles.root}>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={imageUrl} alt={name} className={styles.image} />
      </a>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>{about}</p>
    </div>
  );
};
