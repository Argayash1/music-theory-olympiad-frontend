import { RootState } from '../store';

export const selectResultData = (state: RootState) => state.result;

export const selectResultDataStatus = (state: RootState) => state.result.status;
