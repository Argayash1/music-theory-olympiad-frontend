import React from 'react';
import styles from './PrepMaterialPopup.module.scss';
import { CloseButton } from '../CloseButton';
import clsx from 'clsx';
import { selectScreenWidth } from '../../redux/olympData/selectors';
import { useSelector } from 'react-redux';

type PrepMaterialPopupProps = {
  imageUrl: string;
  type?: string;
  onClose: () => void;
};

export const PrepMaterialPopup = React.forwardRef<HTMLDialogElement, PrepMaterialPopupProps>((props, ref) => {
  const { imageUrl, type, onClose } = props;
  const screenWidth = useSelector(selectScreenWidth);

  function closeAllPopupsByClickOnOverlay(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  const wrapperHeight = screenWidth <= 1279 && screenWidth > 1102 && screenWidth - 507;

  return (
    <dialog ref={ref} className={styles.root} onClick={closeAllPopupsByClickOnOverlay}>
      <div className={styles.wrapper} style={{ height: `${wrapperHeight}px` }}>
        <div className={styles.popupContainer}>
          <CloseButton onClick={onClose} />
          <img
            src={imageUrl}
            alt=''
            className={clsx(styles.popupImage, type === 'score' && styles.popupImageTypeScore)}
          />
        </div>
      </div>
    </dialog>
  );
});
