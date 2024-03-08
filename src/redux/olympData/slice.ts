import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OlympDataSliceState, Status } from './types';
import { fetchMusOlympData } from './asyncActions';

const initialState: OlympDataSliceState = {
  items: [],
  status: Status.LOADING,
  screenWidth: 0,
};

const olympDataSlice = createSlice({
  name: 'olympData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMusOlympData.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    });

    builder.addCase(fetchMusOlympData.fulfilled, (state, action) => {
      state.items = action.payload.data;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchMusOlympData.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export default olympDataSlice.reducer;
