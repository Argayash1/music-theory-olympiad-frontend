import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAudioItem, IAudioSliceState } from './types';

const initialState: IAudioSliceState = {
  audioItem: { audioUrl: '', title: '', author: '' },
  isAudioLoaded: true,
  isPlaying: false,
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setAudioItem(state, action: PayloadAction<IAudioItem>) {
      state.audioItem = action.payload;
    },
    setIsAudioLoaded(state, action: PayloadAction<boolean>) {
      state.isAudioLoaded = action.payload;
    },

    setIsPlaying(state, action: PayloadAction<boolean>) {
      state.isPlaying = action.payload;
    },
  },
});

export const { setAudioItem, setIsAudioLoaded, setIsPlaying } = audioSlice.actions;

export default audioSlice.reducer;
