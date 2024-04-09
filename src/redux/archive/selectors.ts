import { RootState } from '../store';

export const selectArchiveData = (state: RootState) => state.archive;

export const selectArchiveDataStetus = (state: RootState) => state.archive.status;

export const selectArchiveIsMenuOpenData = (state: RootState) => state.archive.isMenuOpen;
