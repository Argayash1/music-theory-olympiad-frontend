export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IDictation {
  audioUrl: string;
  title: string;
  author: string;
  _id?: string;
}

interface ISoundAnalysis extends IDictation {
  tableUrl: string;
  imageUrl: string;
}

interface IDictations {
  scoreUrl: string;
  data: IDictation[];
}

interface IHarmonyAndSolf {
  scoreUrl: string;
  imageUrl: string;
}

export interface IPrepMaterial {
  _id: string;
  category: string;
  dictations: IDictations;
  soundAnalysis: ISoundAnalysis;
  harmonization: IHarmonyAndSolf;
  solfeggio: IHarmonyAndSolf;
}

export type PrepMaterialsItems = {
  data: IPrepMaterial[];
  totalPages: number;
};

export interface AdvertsSliceState {
  items: IPrepMaterial[];
  status: Status;
  activeItemId: string;
}
