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
  place?: string;
  type?: string;
  onClick?: () => void;
};

export const CTA = ({ linkText = 'Участвовать', path, place, type, onClick }: CTAProps) => {
  const ctaClassName = clsx(styles.root, {
    [styles.rootTypeBrandBunner]: type === 'brand-bunner',
    [styles.rootSizeBig]: type === 'brand-bunner' || linkText === 'Оплатить картой',
    [styles.rootTypePay]: type === 'pay',
    [styles.rootTypeDownload]: type === 'dowmload',
    [styles.rootFontWeightMiddle]: linkText === 'Оплатить картой',
  });

  return (
    <a href={path} className={ctaClassName}>
      {linkText}
    </a>
  );
};
