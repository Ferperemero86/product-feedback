'use client';
import { useContext } from 'react';

import { useAppSelector, useAppDispatch } from '@/state/hooks';
import { select } from '@/state/reducers/feedbacksSlice';

import { UserContext } from '@/contexts/UserContext';

import Header from '@/components/layout/Header';

export default function Home() {
  const feedbacksReducer = useAppSelector(select);
  const { user } = useContext(UserContext);

  return (
    <main className="font-jost min-h-screen lg:w-11/12 lg:max-w-7xl lg:mx-auto">
      <Header />
    </main>
  );
}
