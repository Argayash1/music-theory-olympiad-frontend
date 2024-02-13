import React from 'react';
import './CTA.scss';
import { handleScrollToTop } from '../../utils/utils';
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

export const CTA = ({ linkText = 'Подробнее', path, place, type, onClick }: CTAProps) => {
  const ctaButtonClassName = clsx('cta', 'cta_type_button', place === 'full-project' && 'cta_place_full-project');

  const ctaLinkClassName = clsx(
    'cta',
    'cta_type_link',
    linkText !== 'Подробнее' && 'cta_border_grey',
    place === 'main' && 'cta_place_main',
    path && path === '/scores' && 'cta_place_full-union-member',
    place === 'projects' && 'cta_place_projects',
    type === 'pay' && 'cta_type_pay',
  );

  return (
    <>
      {!path ? (
        <button className={ctaButtonClassName} type={ButtonTypeEnum.BUTTON} onClick={onClick}>
          Поделиться
        </button>
      ) : (
        <a href={path} className={ctaLinkClassName} onClick={handleScrollToTop}>
          {linkText}
        </a>
      )}
    </>
  );
};
