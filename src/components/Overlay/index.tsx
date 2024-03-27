import clsx from 'clsx';
import styles from './Overlay.module.scss';
import React from 'react';

type OverLayProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Overlay = ({ children, isOpen, onClose }: OverLayProps) => {
  React.useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }
  }, [isOpen, onClose]);

  function closeAllPopupsByClickOnOverlay(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <section className={clsx(styles.root, isOpen && styles.rootIsOpened)} onMouseDown={closeAllPopupsByClickOnOverlay}>
      {children}
    </section>
  );
};
