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
  const ctaLinkClassName = clsx(
    styles.root,
    type === 'pay' && styles.rootTypePay,
    type === 'brand-bunner' && styles.rootTypeBrandBunner,
  );

  return (
    <a href={path} className={ctaLinkClassName}>
      {linkText}
    </a>
  );
};
