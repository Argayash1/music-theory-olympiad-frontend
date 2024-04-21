import React from 'react';
import styles from './Jury.module.scss';
import { SectionTitle, JuryMemberCard, JuryCardSkeleton, CardSlider } from '../../components';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { selectJuryMemberData } from '../../redux/juryMember/selectors';
import { fetchJuryMembers } from '../../redux/juryMember/asyncActions';
import { menuItems } from '../../utils/menuItems';
import { selectScreenWidth } from '../../redux/olympData/selectors';

export const Jury = React.forwardRef<HTMLElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectJuryMemberData);
  const screenWidth = useSelector(selectScreenWidth);

  const [switchCount, setSwitchCount] = React.useState<number>(0);

  React.useEffect(() => {
    dispatch(fetchJuryMembers());
  }, [dispatch]);

  const juriMemberCards = items.map((item, index) => (
    <li key={index}>
      <JuryMemberCard {...item} />
    </li>
  ));

  const juriMemberCardSkeletons = [...new Array(4)].map((_, index) => (
    <li key={index}>
      <JuryCardSkeleton />
    </li>
  ));

  const offset =
    screenWidth > 871
      ? switchCount * -325
      : screenWidth <= 871 && screenWidth > 647
      ? switchCount * -275
      : switchCount * -146;

  const nextButtonDisabled =
    screenWidth > 1171 || (screenWidth <= 613 && screenWidth > 523) ? switchCount === 1 : switchCount === 2;

  const showCardListWithoutSlider =
    screenWidth >= 1352 || (screenWidth <= 647 && screenWidth > 613) || screenWidth <= 377;

  return (
    <section className={styles.root} id='jury' ref={ref}>
      <div className={styles.container}>
        <SectionTitle text={menuItems[5].name} />
        {showCardListWithoutSlider ? (
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
