import React from 'react';
import styles from './ContactsButtonList.module.scss';
import { CTA } from '../../components';
import { OLYMPIC_RULES_URL, PAYMENT_URL } from '../../utils/constants';
import clsx from 'clsx';

type ContactsButtonListProps = {
  type?: string;
};

export const ContactsButtonList = ({ type }: ContactsButtonListProps) => {
  return (
    <ul
      className={clsx(
        styles.root,
        type === 'list-item' && styles.rootTypeListItem,
        type === 'about-olymp' && styles.rootTypeAboutOlymp,
      )}
    >
      <li>
        <CTA type='pay' linkText='Оплатить картой' path={PAYMENT_URL} />
      </li>
      <li>
        <CTA type='download' linkText='Положение олимпиады' path={OLYMPIC_RULES_URL} />
      </li>
    </ul>
  );
};
