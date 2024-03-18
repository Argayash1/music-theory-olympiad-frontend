import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { mainApi } from '../../utils/constants';
import { ResultItems } from './types';

export const fetchResults = createAsyncThunk<ResultItems>('result/fetchResults', async () => {
  const { data } = await axios.get<ResultItems>(`${mainApi}/results`);
  return data;
});
