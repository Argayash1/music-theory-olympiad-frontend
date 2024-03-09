import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import olympData from './olympData/slice';
import advert from './advert/slice';
import prepMaterial from './prepMaterial/slice';
import result from './result/slice';
import juryMember from './juryMember/slice';

export const store = configureStore({
  reducer: { olympData, advert, prepMaterial, result, juryMember },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
