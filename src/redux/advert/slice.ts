import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdvertsSliceState, Status } from './types';
import { fetchAdvertById, fetchAdverts } from './asyncActions';

const initialState: AdvertsSliceState = {
  items: [],
  status: Status.LOADING,
  advertId: '',
  adverCardItem: null,
};

const advertSlice = createSlice({
  name: 'advert',
  initialState,
  reducers: {
    setAdvertId(state, action: PayloadAction<string | null>) {
      state.advertId = action.payload;
    },

    clearAdverCardItem(state) {
      state.adverCardItem = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdverts.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    });

    builder.addCase(fetchAdverts.fulfilled, (state, action) => {
      state.items = action.payload.data;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchAdverts.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });

    builder.addCase(fetchAdvertById.pending, (state) => {
      state.adverCardItem = null;
      state.status = Status.LOADING;
    });

    builder.addCase(fetchAdvertById.fulfilled, (state, action) => {
      state.adverCardItem = action.payload.data;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchAdvertById.rejected, (state) => {
      state.status = Status.ERROR;
      state.adverCardItem = null;
    });
  },
});

export const { setAdvertId, clearAdverCardItem } = advertSlice.actions;

export default advertSlice.reducer;
