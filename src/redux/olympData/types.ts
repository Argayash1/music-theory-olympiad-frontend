export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface OlympData {
  _id: string;
  olympNumber: string;
  dates: string;
  registrationDates: string;
  city: string;
  topic: string;
  participants: string;
}

export type OlympDataItems = {
  data: OlympData[];
  totalPages: number;
};

export interface OlympDataSliceState {
  items: OlympData[];
  status: Status;
  screenWidth: number;
}
