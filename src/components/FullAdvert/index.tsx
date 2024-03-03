import React from 'react';
import styles from './FullAdvert.module.scss';
import { AdvertCardType, CTA, CloseButton } from '../../components';
import tgicon from '../../assets/icons/full-advert-tg-icon.svg';
import vkicon from '../../assets/icons/full-advert-vk-icon.svg';
import okicon from '../../assets/icons/full-advert-ok-icon.svg';
import waicon from '../../assets/icons/full-advert-wa-icon.svg';
import clsx from 'clsx';

type FullAdvertProps = {
  onClose: () => void;
  advertItem: AdvertCardType;
};

const socialIcons = [tgicon, okicon, vkicon, waicon];

export const FullAdvert = ({ onClose, advertItem }: FullAdvertProps) => {
  const [isSocialIconsOpen, setIsSocialIconsOpen] = React.useState<boolean>(false);

  return (
    <article className={styles.root}>
      <div className={styles.imgContainer}>
        <div className={styles.imgBackground}>
          <div className={styles.img}></div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.date}>{advertItem.createdAt}</span>
        <h3 className={styles.title}>{advertItem.title}</h3>
        <p className={styles.text}>{advertItem.content}</p>
        <div className={styles.shareContainer}>
          <CTA
            linkText='Поделиться'
            type='share'
            onClick={() => setIsSocialIconsOpen(!isSocialIconsOpen)}
            isBorderShown={isSocialIconsOpen}
          />
          <ul className={clsx(styles.socialIcons, isSocialIconsOpen && styles.socialIconsIsOpened)}>
            {socialIcons.map((icon, index) => (
              <li key={index} className={styles.socialIconsItem}>
                {<img src={icon} alt='' className={styles.socialIcon} />}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CloseButton onClick={onClose} place='adverts' />
    </article>
  );
};
