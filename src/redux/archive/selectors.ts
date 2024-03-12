import { RootState } from '../store';

export const selectArchiveDataItems = (state: RootState) => state.archive.items;

export const selectArchiveDataStetus = (state: RootState) => state.archive.status;
