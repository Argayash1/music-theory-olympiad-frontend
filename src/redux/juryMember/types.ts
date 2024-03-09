export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IJuryMember {
  imageUrl: string;
  surname: string;
  patronymic: string;
  name: string;
  about: string;
  link: string;
}

export type JuryMemberItems = {
  data: IJuryMember[];
  totalPages: number;
};

export interface OlympDataSliceState {
  items: IJuryMember[];
  status: Status;
}
