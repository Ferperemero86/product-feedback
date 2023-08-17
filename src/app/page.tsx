'use client';

import { useEffect, useState, MouseEvent } from 'react';
import Link from 'next/link';

import { select } from '@/state/reducers/feedbacksSlice';

import { useAppSelector, useAppDispatch } from '@/state/hooks';

import Header from '@/components/layout/Header';
import FeedbackPanel from '@/components/feedback/FeedbackPanel';
import Form from '@/components/form/Form';
import ModalBg from '@/components/ModalBg';

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
  const { feedbacks } = useAppSelector(select);
  const [isEditFormShowing, setEditFormShowing] = useState<boolean>(false);

  const showForm = () => {
    setEditFormShowing(() => true);
  };

  const cancelForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setEditFormShowing(() => false);
  };

  useEffect(() => {
    const feedbacksData = data.productRequests;

    if (feedbacks.length === 0) {
      dispatch(updateFeedbacks(feedbacksData));
    }
  }, []);

  return (
    <main className="relative font-jost pb-14 min-h-screen lg:w-11/12 lg:max-w-7xl lg:-translate-x-1/2 lg:left-1/2">
      <Header showForm={showForm} />
      {isEditFormShowing && (
        <Form
          cancelForm={cancelForm}
          customStyles="bg-white w-11/12 absolute -translate-x-1/2  left-1/2 lg:top-14 z-50"
          type="create"
        />
      )}
      {isEditFormShowing && <ModalBg />}
      <div className="w-11/12 mx-auto mt-5 lg:static lg:ml-auto lg:m-0 lg:pt-20 lg:w-3/5">
        <FeedBacks />
      </div>
    </main>
  );
}
