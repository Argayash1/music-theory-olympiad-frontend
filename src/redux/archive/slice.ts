import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArchiveSliceState, Status } from './types';
import { fetchArchives } from './asyncActions';

const initialState: ArchiveSliceState = {
  items: [],
  status: Status.LOADING,
  isMenuOpen: [],
};

const archiveSlice = createSlice({
  name: 'archive',
  initialState,
  reducers: {
    setIsMenuOpen(state, action: PayloadAction<number>) {
      const isOpen = state.isMenuOpen.some((item) => item === action.payload);
      state.isMenuOpen = isOpen
        ? state.isMenuOpen.filter((item) => item !== action.payload)
        : [...state.isMenuOpen, action.payload];
    },
  },
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

export const { setIsMenuOpen } = archiveSlice.actions;

export default archiveSlice.reducer;
