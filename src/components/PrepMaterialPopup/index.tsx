import React from 'react';
import styles from './PrepMaterialPopup.module.scss';

type PrepMaterialPopupProps = {
  imageUrl: string;
  onClose: () => void;
};

export const PrepMaterialPopup = React.forwardRef<HTMLDialogElement, PrepMaterialPopupProps>((props, ref) => {
  const { imageUrl, onClose } = props;

  function closeAllPopupsByClickOnOverlay(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <dialog ref={ref} className={styles.root} onClick={closeAllPopupsByClickOnOverlay}>
      <div className={styles.wrapper}>
        <div className={styles.popupContainer}>
          <button type='button' className={styles.closeButton} onClick={onClose}></button>
          <img src={imageUrl} alt='' className={styles.popupImage} />
        </div>
      </div>
    </dialog>
  );
});
