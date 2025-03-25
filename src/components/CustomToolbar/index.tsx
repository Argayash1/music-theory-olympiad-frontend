import { Toolbar, SaveButton, DeleteButton } from 'react-admin';
import styles from './CustomToolbar.module.scss';

export const CustomToolbar = ({ showDeleteButton = true }) => (
  <Toolbar className={styles.root}>
    <SaveButton label='Сохранить' />
    {showDeleteButton && <DeleteButton label='Удалить' />}
  </Toolbar>
);
