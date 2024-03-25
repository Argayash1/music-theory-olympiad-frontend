import React from 'react';
import styles from './Jury.module.scss';
import { SectionTitle } from '../SectionTitle';
import { JuryMemberCard } from '../JuryMemberCard';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { selectJuryMemberData } from '../../redux/juryMember/selectors';
import { fetchJuryMembers } from '../../redux/juryMember/asyncActions';
import { menuItems } from '../../utils/menuItems';
import { JuryCardSkeleton } from '../JuryCardSkeleton';
import { selectScreenWidth } from '../../redux/olympData/selectors';
import { CardSlider } from '../CardSlider';

export const Jury = React.forwardRef<HTMLElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectJuryMemberData);
  const screenWidth = useSelector(selectScreenWidth);

  const [switchCount, setSwitchCount] = React.useState<number>(0);

  React.useEffect(() => {
    dispatch(fetchJuryMembers());
  }, [dispatch]);

  const juriMemberCards = items.map((item, index) => (
    <li key={index} className={styles.listItem}>
      <JuryMemberCard {...item} />
    </li>
  ));

  const juriMemberCardSkeletons = [...new Array(4)].map((_, index) => (
    <li key={index}>
      <JuryCardSkeleton />
    </li>
  ));

  const offset = switchCount * -325;
  const nextButtonDisabled = screenWidth <= 1439 ? switchCount === 1 : switchCount === 2;

  return (
    <section className={styles.root} id='jury' ref={ref}>
      <div className={styles.container}>
        <SectionTitle text={menuItems[5].name} />
        {screenWidth >= 1369 ? (
          <ul className={styles.list}>{status === 'loading' ? juriMemberCardSkeletons : juriMemberCards}</ul>
        ) : (
          <CardSlider
            onSwitchToPrevSlides={() => setSwitchCount((prev) => prev - 1)}
            onSwitchToNextSlides={() => setSwitchCount((prev) => prev + 1)}
            switchCount={switchCount}
            nextButtonDisabled={nextButtonDisabled}
            status={status}
            type='jury'
          >
            <ul className={styles.list} style={{ transform: `translateX(${offset}px)` }}>
              {status === 'loading' ? juriMemberCardSkeletons : juriMemberCards}
            </ul>
          </CardSlider>
        )}
      </div>
    </section>
  );
});
