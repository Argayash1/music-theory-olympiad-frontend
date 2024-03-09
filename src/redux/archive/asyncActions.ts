import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { localApi } from '../../utils/constants';
import { JuryMemberItems } from './types';

export const fetchJuryMembers = createAsyncThunk<JuryMemberItems>('juryMember/fetchJuryMembers', async () => {
  const { data } = await axios.get<JuryMemberItems>(`${localApi}/juryMembers`);
  return data;
});
