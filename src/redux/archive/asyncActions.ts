import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { mainApi } from '../../utils/constants';
import { ArchiveItems } from './types';

export const fetchArchives = createAsyncThunk<ArchiveItems, string>('archive/fetchArchives', async (сategory) => {
  const { data } = await axios.get<ArchiveItems>(`${mainApi}/archives?${сategory}`);
  return data;
});
