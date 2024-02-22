import React from 'react';
import styles from './FullAdvert.module.scss';

export const FullAdvert = () => {
  return (
    <article className={styles.root}>
      <div className={styles.imgBackground}>
        <div className={styles.img}></div>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.date}>07.02</span>
        <h3 className={styles.title}>Заголовок</h3>
        <p className={styles.text}>
          Студенты средних профессиональных образовательных организаций в сфере культуры и искусства и учащиеся 9 – 12
          классов средних специальных музыкальных школ. Студенты средних профессиональных образовательных организаций в
          сфере культуры и искусства и учащиеся 9 – 12 классов средних специальных музыкальных школ.
        </p>
        <button className={styles.shareButton}>Поделиться</button>
      </div>
    </article>
  );
};
