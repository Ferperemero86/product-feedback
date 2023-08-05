import { MouseEvent } from 'react';

export type Feedback = {
  id: number;
  title: string;
  description: string;
  feature: string;
  upvotes: number;
  comments: number;
};

export type User = {
  LoggedIn: boolean;
};

export type NavDisplayState = boolean;

export type FeedbacksPayload = Feedback[];

export type OnClickDivHandler = (event: MouseEvent<HTMLDivElement>) => void;
