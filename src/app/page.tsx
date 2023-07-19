'use client';

import { useAppSelector, useAppDispatch } from '@/state/hooks';
import { select } from '@/state/reducers/feedbacksSlice';

export default function Home() {
  const feedbacksReducer = useAppSelector(select);
  console.log('feedbacksReducer', feedbacksReducer);

  return (
    <main className="">
      <div className="text-center">
        <h1>Boilerplate</h1>
      </div>
    </main>
  );
}
