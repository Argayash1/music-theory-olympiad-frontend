import { RootState } from '../store';

export const selectAdvertData = (state: RootState) => state.advert;

export const selectAdvertDataStatus = (state: RootState) => state.advert.status;

export const selectAdvertDataItems = (state: RootState) => state.advert.items;

export const selectAdvertId = (state: RootState) => state.advert.advertId;
