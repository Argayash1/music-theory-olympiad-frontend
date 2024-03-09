import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { localApi } from '../../utils/constants';
import { ResultItems } from './types';

export const fetchResults = createAsyncThunk<ResultItems>('result/fetchResults', async () => {
  const { data } = await axios.get<ResultItems>(`${localApi}/results`);
  return data;
});
