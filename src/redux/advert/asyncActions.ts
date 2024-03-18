import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { mainApi } from '../../utils/constants';
import { AdvertItem, AdvertsItems } from './types';

export const fetchAdverts = createAsyncThunk<AdvertsItems>('adverts/fetchAdverts', async () => {
  const { data } = await axios.get<AdvertsItems>(`${mainApi}/adverts`);
  return data;
});

export const fetchAdvertById = createAsyncThunk<AdvertItem, string>('adverts/fetchAdvertById', async (id) => {
  const { data } = await axios.get<AdvertItem>(`${mainApi}/adverts/${id}`);

  return data;
});
