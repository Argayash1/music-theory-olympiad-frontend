import { createSlice } from '@reduxjs/toolkit';
import { ArchiveSliceState, Status } from './types';
import { fetchArchives } from './asyncActions';

const initialState: ArchiveSliceState = {
  items: [],
  status: Status.LOADING,
};

const archiveSlice = createSlice({
  name: 'archive',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArchives.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    });

    builder.addCase(fetchArchives.fulfilled, (state, action) => {
      state.items = action.payload.data;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchArchives.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export default archiveSlice.reducer;
