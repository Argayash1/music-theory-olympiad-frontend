import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { localApi } from '../../utils/constants';
import { PrepMaterialsItems } from './types';

export const fetchPrepMaterials = createAsyncThunk<PrepMaterialsItems>('prepMaterial/fetchPrepMaterials', async () => {
  const { data } = await axios.get<PrepMaterialsItems>(`${localApi}/prepMaterials`);
  return data;
});
