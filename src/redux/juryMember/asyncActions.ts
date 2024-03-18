import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { mainApi } from '../../utils/constants';
import { JuryMemberItems } from './types';

export const fetchJuryMembers = createAsyncThunk<JuryMemberItems>('juryMember/fetchJuryMembers', async () => {
  const { data } = await axios.get<JuryMemberItems>(`${mainApi}/juryMembers`);
  return data;
});
