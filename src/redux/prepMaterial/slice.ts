import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdvertsSliceState, Status } from './types';
import { fetchPrepMaterials } from './asyncActions';

const initialState: AdvertsSliceState = {
  items: [],
  status: Status.LOADING,
  activeItemId: '',
};

const prepMaterialSlice = createSlice({
  name: 'prepMaterial',
  initialState,
  reducers: {
    setActiveItemId(state, action: PayloadAction<string>) {
      state.activeItemId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPrepMaterials.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    });

    builder.addCase(fetchPrepMaterials.fulfilled, (state, action) => {
      state.items = action.payload.data;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPrepMaterials.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setActiveItemId } = prepMaterialSlice.actions;

export default prepMaterialSlice.reducer;
