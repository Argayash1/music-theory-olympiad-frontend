import { RootState } from '../store';

export const selectAudioData = (state: RootState) => state.audio;

export const selectAudioItemData = (state: RootState) => state.audio.audioItem;
