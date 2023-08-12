'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

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
      <Link href={`/post/${feedback.id}`} key={idx}>
        <FeedbackPanel
          customStyles="w-11/12 mt-5 mx-auto lg:w-full lg:mt-5"
          feedback={feedback}
          key={idx}
        />
      </Link>
    );
  });
};

export default function Home() {
  const dispatch = useAppDispatch();
  const [mainBg, setMainBg] = useState<string>('hidden');
  const [fullBg, setFullBg] = useState<string>('');

  const showDarkBg = (isNavShowing: boolean) => {
    if (isNavShowing) {
      setMainBg('bg-black z-50 block');
      setFullBg('max-h-screen overflow-hidden');
    } else {
      setMainBg('hidden');
      setFullBg('');
    }
  };

  useEffect(() => {
    const feedbacks = data.productRequests;
    dispatch(updateFeedbacks(feedbacks));
  }, []);

  return (
    <main
      className={`${fullBg} font-jost pb-14 min-h-screen lg:w-11/12 lg:relative lg:max-w-7xl lg:-translate-x-1/2 lg:left-1/2`}
    >
      <Header onClick={showDarkBg} />
      <div
        className={`${mainBg} absolute h-full w-full z-50 bg-opacity-50 md:hidden`}
      ></div>
      <div className="w-11/12 mx-auto mt-5 lg:static lg:ml-auto lg:m-0 lg:pt-20 lg:w-3/5">
        <FeedBacks />
      </div>
    </main>
  );
}
