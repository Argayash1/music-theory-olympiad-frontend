import React from 'react';
import styles from './Jury.module.scss';
import { SectionTitleContainer } from '../SectionTitleContainer';
import { JuryMemberCard } from '../JuryMemberCard';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { selectJuryMemberData } from '../../redux/juryMember/selectors';
import { fetchJuryMembers } from '../../redux/juryMember/asyncActions';
import { menuItems } from '../../utils/menuItems';
import { JuryCardSkeleton } from '../JuryCardSkeleton';

export const Jury = React.forwardRef<HTMLElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectJuryMemberData);

  React.useEffect(() => {
    dispatch(fetchJuryMembers());
  }, [dispatch]);

  const juriMemberCards = items.map((item, index) => (
    <li key={index} className={styles.listItem}>
      <JuryMemberCard {...item} />
    </li>
  ));

  const juriMemberCardSkeletons = [...new Array(4)].map((_, index) => (
    <li>
      <JuryCardSkeleton />
    </li>
  ));

  return (
    <section className={styles.root} id='jury' ref={ref}>
      <div className={styles.container}>
        <SectionTitleContainer text={menuItems[5].name} />
        <ul className={styles.list}>{status === 'loading' ? juriMemberCardSkeletons : juriMemberCards}</ul>
      </div>
    </section>
  );
});
