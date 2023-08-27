import { MouseEvent } from 'react';

export type PostUser = {
  image: string;
  name: string;
  username: string;
};

export type Comment = {
  id?: number;
  content: string;
  user: PostUser;
  replies?: Reply[];
};

export type CommentParams = {
  id: string;
};

export type Reply = {
  content: string;
  replyingTo: string;
  user: PostUser;
};

export type Feedback = {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  upvotes?: number;
  comments?: Comment[];
};

export type User = {
  LoggedIn: boolean;
};

export type FilterFeedback = {
  label: string;
  value: string;
};

export type NavDisplayState = boolean;

export type FeedbacksPayload = Feedback[];

export type OnClickDivHandler = (event: MouseEvent<HTMLDivElement>) => void;
