import { RootState } from '../store';

export const selectOlympData = (state: RootState) => state.olympData;

export const selectOlympDataStatus = (state: RootState) => state.olympData.status;

export const selectOlympDataItem = (state: RootState) => state.olympData.items[0];

export const selectScreenWidth = (state: RootState) => state.olympData.screenWidth;
