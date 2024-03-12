export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IArchiveObject {
  _id: string;
  link: string;
  category: string;
}

interface IArchive {
  year: string;
  category: string;
  dictations: IArchiveObject[];
  soundAnalysis: IArchiveObject[];
  harmonization: IArchiveObject[];
  solfeggio: IArchiveObject[];
}

export type ArchiveItems = {
  data: IArchive[];
  totalPages: number;
};

export interface ArchiveSliceState {
  items: IArchive[];
  status: Status;
}
