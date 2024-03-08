import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { localApi } from '../../utils/constants';
import { OlympDataItems } from './types';

export const fetchMusOlympData = createAsyncThunk<OlympDataItems>('musOlympData/fetchMusOlympData', async () => {
  const { data } = await axios.get<OlympDataItems>(`${localApi}/musOlympData`);
  return data;
});
