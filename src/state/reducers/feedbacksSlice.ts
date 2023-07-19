import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/state/store';

import { Feedback } from '@/state/types';

interface InitialState {
  feedbacks: Feedback[];
}

const initialState: InitialState = {
  feedbacks: [],
};

export const feedbacksSlice = createSlice({
  name: 'feedbacks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = feedbacksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const select = (state: RootState) => state.feedbacksSlice;

export default feedbacksSlice.reducer;
