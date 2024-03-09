import { RootState } from '../store';

export const selectPrepMaterialsData = (state: RootState) => state.prepMaterial;

export const selectActiveItemId = (state: RootState) => state.prepMaterial.activeItemId;
