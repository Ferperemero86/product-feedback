import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/state/store';

import { Feedback } from '@/state/types';

interface InitialState {
  feedbacks: Feedback[];
  filteredFeedbacks: Feedback[] | string;
}

const initialState: InitialState = {
  feedbacks: [],
  filteredFeedbacks: [],
};

export const feedbacksSlice = createSlice({
  name: 'feedbacks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateFeedbacks: (state, action: PayloadAction<Feedback[]>) => {
      state.feedbacks = action.payload;
    },
    updateFilteredFeedbacks: (
      state,
      action: PayloadAction<Feedback[] | string>,
    ) => {
      state.filteredFeedbacks = action.payload;
    },
    editFeedback: (state, action: PayloadAction<Feedback>) => {
      const updatedFeedback = action.payload;
      const indexToReplace = state.feedbacks.findIndex(
        (obj) => obj.id === updatedFeedback.id,
      );

      if (indexToReplace !== -1) {
        const updatedFeedbacks = [...state.feedbacks];
        updatedFeedbacks[indexToReplace] = updatedFeedback;

        state.feedbacks = updatedFeedbacks;
      }
    },
    createFeedback: (state, action: PayloadAction<Feedback>) => {
      const updatedFeedback = action.payload;

      state.feedbacks = [...state.feedbacks, updatedFeedback];

      if (Array.isArray(state.filteredFeedbacks)) {
        state.filteredFeedbacks = [...state.filteredFeedbacks, updatedFeedback];
      }
    },
    deleteFeedback: (state, action: PayloadAction<number>) => {
      const feedbackId = action.payload;
      const feedbacks = [...state.feedbacks];

      state.feedbacks = feedbacks.filter(
        (feedback) => feedback.id !== feedbackId,
      );
    },
  },
});

export const {
  updateFeedbacks,
  editFeedback,
  deleteFeedback,
  createFeedback,
  updateFilteredFeedbacks,
} = feedbacksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const select = (state: RootState) => state.feedbacksSlice;

export default feedbacksSlice.reducer;
