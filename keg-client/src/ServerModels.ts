export interface Beer {
  _id: string;
  name: string;
  brewer: string;
  image: string;
  bitterness: number;
  abv: number;
  style: string;
  upvotes?: number;
  downvotes?: number;
  description: string;
}
export type Tap = 'left' | 'right';

export interface Tapped extends KegLog {
  beer: Beer;
}

export interface KegLog {
  _id: string;
  tap: Tap;
  tapped: string;
  emptied?: string;
  beerId: string;
  isCurrent: boolean;
}

export type TapDescription = [Tapped | null, Tapped | null];

export interface Metadata {
  ip: string;
}
