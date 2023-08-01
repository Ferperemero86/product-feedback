import { MouseEvent } from 'react';

export type Feedback = {
  id: number;
};

export type User = {
  LoggedIn: boolean;
};

export type OnClickDivHandler = (event: MouseEvent<HTMLDivElement>) => void;
