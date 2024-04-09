export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface LinkData {
  linkText: string;
  linkUrl: string;
}

export interface Advert {
  _id: string;
  createdAt: string;
  title: string;
  content: string;
  links: LinkData[];
}

export type AdvertsItems = {
  data: Advert[];
  totalPages: number;
};

export type AdvertItem = {
  data: Advert;
};

export interface AdvertsSliceState {
  items: Advert[];
  status: Status;
  advertId: string | null;
  adverCardItem: Advert | null;
}
