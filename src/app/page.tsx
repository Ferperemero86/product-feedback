'use client';
import { useContext, useEffect } from 'react';

import { select } from '@/state/reducers/feedbacksSlice';

import { useAppSelector, useAppDispatch } from '@/state/hooks';

import Header from '@/components/layout/Header';
import FeedbackPanel from '@/components/feedback/FeedbackPanel';

import { updateFeedbacks } from '@/state/reducers/feedbacksSlice';

import { data } from '../../data';

const FeedBacks = () => {
  const { feedbacks } = useAppSelector(select);

  return feedbacks.map((feedback, idx) => {
    return (
      <FeedbackPanel
        customStyles="w-11/12 mx-auto lg:absolute lg:right-0 lg:w-3/5"
        feedback={feedback}
        key={idx}
      />
    );
  });
};

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateFeedbacks(data));
  }, []);

  return (
    <main className="font-jost min-h-screen lg:w-11/12 lg:max-w-7xl lg:mx-auto">
      <Header />
      <div className="mt-5 lg:relative lg:top-28">
        <FeedBacks />
      </div>
    </main>
  );
}
