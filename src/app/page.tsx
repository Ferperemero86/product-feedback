'use client';
import { useContext } from 'react';

import { useAppSelector, useAppDispatch } from '@/state/hooks';
import { select } from '@/state/reducers/feedbacksSlice';

import { UserContext } from '@/contexts/UserContext';

export default function Home() {
  const feedbacksReducer = useAppSelector(select);
  const { user } = useContext(UserContext);

  return (
    <main className="font-jost">
      <div className="bg-red-500"></div>
    </main>
  );
}
