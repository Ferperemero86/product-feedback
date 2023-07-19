'use client';
import { useContext } from 'react';

import { useAppSelector, useAppDispatch } from '@/state/hooks';
import { select } from '@/state/reducers/feedbacksSlice';

import { UserContext } from '@/contexts/UserContext';

export default function Home() {
  const feedbacksReducer = useAppSelector(select);
  const { user } = useContext(UserContext);

  return (
    <main className="">
      <div className="text-center">
        <h1>Boilerplate</h1>
      </div>
    </main>
  );
}
