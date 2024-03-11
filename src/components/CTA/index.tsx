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
  isBorderShown?: boolean;
  onClick?: () => void;
};

export const CTA = ({ linkText = 'Участвовать', path, type, isBorderShown, onClick }: CTAProps) => {
  const ctaClassName = clsx(styles.root, {
    [styles.rootTypeLink]: type !== 'learn' && type !== 'share',
    [styles.rootTypeButton]: type === 'learn' || type === 'share',
    [styles.rootSizeBig]: type === 'brand-bunner' || linkText === 'Оплатить картой',
    [styles.rootTypePay]: type === 'pay',
    [styles.rootTypeDownload]: type === 'download' || type === 'download-archive',
    [styles.rootTypeLearn]: type === 'learn',
    [styles.rootTypeShare]: type === 'share',
    [styles.rootFontWeightMiddle]: linkText === 'Оплатить картой',
    [styles.rootSizeMiddle]: linkText === 'Скачать ноты' || linkText === 'Скачать таблицу',
    [styles.rootPlaceArchive]: type === 'download-archive',
    [styles.rootPlaceResults]: linkText === 'Скачать результаты',
    [styles.rootInactive]: type === 'download' && !path,
    [styles.rootBorderShown]: isBorderShown,
    [styles.rootPlaceAudioPlayer]: type === 'download' && linkText === 'cкачать',
  });

  return (
    <>
      {onClick ? (
        <button onClick={onClick} className={ctaClassName}>
          {linkText}
          {type === 'learn' && (
            <svg
              className={styles.arrowIcon}
              viewBox='0 0 25.9998 14.0083'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <defs />
              <path
                id='Vector 4'
                d='M18.7144 13.0042L25 7.00415L18.7144 1.00415M1 7.00415L25 7.00415'
                stroke='#FFFFFF'
                strokeOpacity='1.000000'
                strokeWidth='2.000000'
                strokeLinejoin='round'
              />
            </svg>
          )}
        </button>
      ) : type === 'download' || type === 'download-archive' ? (
        <a href={path} className={ctaClassName} download>
          {linkText}
          {type === 'download' ? (
            <svg
              className={clsx(
                styles.icon,
                !path && styles.iconInactive,
                type === 'download' && linkText === 'cкачать' && styles.iconPlaceAudioPlayer,
              )}
              width='12.000000'
              height='17.000000'
              viewBox='0 0 12 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <defs />
              <path
                id='Vector'
                d='M1 16L11 16M6 1L6 12.6667M10.1667 8.5L6 12.6667L1.83331 8.5'
                stroke='#FFBB4D'
                strokeOpacity='1.000000'
                strokeWidth='2.000000'
                strokeLinejoin='round'
              />
            </svg>
          ) : (
            <svg className={styles.iconLittle} viewBox='0 0 12 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1 16H11M6 1V12.6667M6 12.6667L10.1667 8.5M6 12.6667L1.83333 8.5'
                stroke='#FFBB4D'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          )}
        </a>
      ) : (
        <a href={path} className={ctaClassName} target='_blank' rel='noreferrer'>
          {linkText}
        </a>
      )}
    </>
  );
};
