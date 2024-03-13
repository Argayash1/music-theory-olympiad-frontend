import { createSlice } from '@reduxjs/toolkit';
import { OlympDataSliceState, Status } from './types';
import { fetchJuryMembers } from './asyncActions';

const initialState: OlympDataSliceState = {
  items: [],
  status: Status.LOADING,
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJuryMembers.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    });

    builder.addCase(fetchJuryMembers.fulfilled, (state, action) => {
      state.items = action.payload.data;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchJuryMembers.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export default resultSlice.reducer;
