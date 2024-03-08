import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { localApi } from '../../utils/constants';
import { AdvertItem, AdvertsItems } from './types';

export const fetchAdverts = createAsyncThunk<AdvertsItems>('adverts/fetchAdverts', async () => {
  const { data } = await axios.get<AdvertsItems>(`${localApi}/adverts`);
  return data;
});

export const fetchAdvertById = createAsyncThunk<AdvertItem, string>('adverts/fetchAdvertById', async (id) => {
  const { data } = await axios.get<AdvertItem>(`${localApi}/adverts/${id}`);

  return data;
});
