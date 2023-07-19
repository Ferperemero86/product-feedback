import { configureStore } from '@reduxjs/toolkit';
import feedbacksSlice from '@/state/reducers/feedbacksSlice';

export const store = configureStore({
  reducer: {
    feedbacksSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
