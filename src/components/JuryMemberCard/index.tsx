import React from 'react';
import styles from './JuryMemberCard.module.scss';

type JuryMemberCardProps = {
  name: string;
  about: string;
  imageUrl: string;
};

export const JuryMemberCard = ({ name, about, imageUrl }: JuryMemberCardProps) => {
  return (
    <div className={styles.root}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>{about}</p>
    </div>
  );
};
