import React from 'react';
import styles from './SharePannel.module.scss';
import tgIcon from '../../assets/icons/full-advert-tg-icon.svg';
import vkIcon from '../../assets/icons/full-advert-vk-icon.svg';
import okIcon from '../../assets/icons/full-advert-ok-icon.svg';
import waIcon from '../../assets/icons/full-advert-wa-icon.svg';
import clsx from 'clsx';

type SharePannelProps = {
  isOpen: boolean;
  itemTitle: string | undefined;
};

export const SharePannel = ({ isOpen, itemTitle }: SharePannelProps) => {
  const currentUrl = window.location.href;

  const buttonItems = [
    { id: 1, icon: tgIcon, link: `https://t.me/share/url?url=${currentUrl}&text=${itemTitle}`, altText: 'Telegram' },
    {
      id: 3,
      icon: okIcon,
      link: `https://connect.ok.ru/offer?url=${currentUrl}&title=${itemTitle}`,
      altText: 'Одноклассники',
    },
    { id: 0, icon: vkIcon, link: `https://vk.com/share.php?url={${currentUrl}}`, altText: 'VK' },
    { id: 4, icon: waIcon, link: `whatsapp://send?text=${itemTitle}`, altText: 'WhatsApp' },
  ];

  return (
    <ul className={clsx(styles.root, isOpen && styles.rootIsOpened)}>
      {buttonItems.map((item) => (
        <li key={item.id} className={styles.item}>
          <a href={item.link} className={styles.link}>
            <img src={item.icon} alt={item.altText} className={styles.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};
