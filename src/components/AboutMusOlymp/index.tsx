import React from 'react';
import styles from './AboutMusOlymp.module.scss';
import { ContactsButtonList, OlympDataCardsContainer, SectionTitle } from '../../components';
import { useSelector } from 'react-redux';
import { selectOlympDataStatus } from '../../redux/olympData/selectors';
import { menuItems } from '../../utils/menuItems';

export const AboutMusOlymp = React.forwardRef<HTMLElement>((props, ref) => {
  const status = useSelector(selectOlympDataStatus);

  return (
    <section className={styles.root} id='about-olymp' ref={ref}>
      <SectionTitle text={menuItems[0].name} />
      <OlympDataCardsContainer status={status} />
      <ContactsButtonList type='about-olymp' />
    </section>
  );
});
