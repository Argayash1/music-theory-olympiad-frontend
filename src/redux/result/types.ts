export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IResult {
  _id: string;
  category: string;
  url: string;
}

export type ResultItems = {
  data: IResult[];
  totalPages: number;
};

export interface OlympDataSliceState {
  items: IResult[];
  status: Status;
}
