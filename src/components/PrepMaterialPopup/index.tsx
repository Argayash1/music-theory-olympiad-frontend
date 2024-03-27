import React from 'react';
import styles from './PrepMaterialPopup.module.scss';
import { CloseButton } from '../CloseButton';
import clsx from 'clsx';

type PrepMaterialPopupProps = {
  imageUrl: string;
  type?: string;
  onClose: () => void;
};

export const PrepMaterialPopup = React.forwardRef<HTMLDialogElement, PrepMaterialPopupProps>((props, ref) => {
  const { imageUrl, type, onClose } = props;

  function closeAllPopupsByClickOnOverlay(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <dialog ref={ref} className={styles.root} onClick={closeAllPopupsByClickOnOverlay}>
      <div className={styles.wrapper}>
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
