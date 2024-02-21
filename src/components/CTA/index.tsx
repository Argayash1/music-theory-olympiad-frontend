import React from 'react';
import styles from './CTA.module.scss';
import clsx from 'clsx';

export enum ButtonTypeEnum {
  SUBMIT = 'submit',
  BUTTON = 'button',
}

type CTAProps = {
  linkText?: string;
  path?: string;
  type?: string;
};

export const CTA = ({ linkText = 'Участвовать', path, type }: CTAProps) => {
  const ctaClassName = clsx(styles.root, {
    [styles.rootTypeBrandBunner]: type === 'brand-bunner',
    [styles.rootSizeBig]: type === 'brand-bunner' || linkText === 'Оплатить картой',
    [styles.rootTypePay]: type === 'pay',
    [styles.rootTypeDownload]: type === 'download' || type === 'download-archive',
    [styles.rootTypeLearn]: type === 'learn',
    [styles.rootFontWeightMiddle]: linkText === 'Оплатить картой',
    [styles.rootSizeMiddle]: linkText === 'Скачать ноты' || linkText === 'Скачать таблицу',
    [styles.rootPlaceArchive]: type === 'download-archive',
    [styles.rootInactive]: type === 'download' && !path,
  });

  return (
    <>
      {type === 'download' || type === 'download-archive' ? (
        <a href={path} className={ctaClassName} download>
          {linkText}
          {type === 'download' && <div className={clsx(styles.icon, !path && styles.iconInactive)}></div>}
        </a>
      ) : (
        <a href={path} className={ctaClassName} target='_blank' rel='noreferrer'>
          {linkText}
        </a>
      )}
    </>
  );
};
