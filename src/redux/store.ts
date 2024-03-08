import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import olympData from './olympData/slice';
import advert from './advert/slice';

export const store = configureStore({
  reducer: { olympData, advert },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
