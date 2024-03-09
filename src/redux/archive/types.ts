export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IArchive {
  imageUrl: string;
  surname: string;
  patronymic: string;
  name: string;
  about: string;
  link: string;
}

export type JuryMemberItems = {
  data: IArchive[];
  totalPages: number;
};

export interface OlympDataSliceState {
  items: IArchive[];
  status: Status;
}
