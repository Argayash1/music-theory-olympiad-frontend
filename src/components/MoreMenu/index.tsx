import React from 'react';
import styles from './MoreMenu.module.scss';
import downloadIcon from '../../assets/icons/more-menu-download-icon.svg';
import speedIcon from '../../assets/icons/more-menu-speed-icon.svg';
import clsx from 'clsx';

type MenuItem = {
  name: string;
  onClick: () => void;
  icon: string;
};

type MoreMenuProps = {
  onToggleSpeedParams: () => void;
  onDownLoad: () => void;
  isMoreMenuOpen: boolean;
};

export const MoreMenu = React.forwardRef<HTMLUListElement, MoreMenuProps>((props, ref) => {
  const { onToggleSpeedParams, onDownLoad, isMoreMenuOpen } = props;

  const menuItems: MenuItem[] = [
    {
      name: 'Скачать',
      onClick: onDownLoad,
      icon: downloadIcon,
    },
    {
      name: 'Скорость воспроизведения',
      onClick: onToggleSpeedParams,
      icon: speedIcon,
    },
  ];

  return (
    <ul ref={ref} className={clsx(styles.root, isMoreMenuOpen && styles.rootIsOpened)}>
      {menuItems.map((menuItem, index) => (
        <li key={index} className={styles.listItem}>
          <button onClick={menuItem.onClick} className={styles.button}>
            <div className={styles.buttonIcon} style={{ backgroundImage: `url(${menuItem.icon})` }}></div>
            {menuItem.name}
          </button>
        </li>
      ))}
    </ul>
  );
});
