'use client';

import { select } from '@/state/reducers/feedbacksSlice';
import { useAppSelector, useAppDispatch } from '@/state/hooks';

import Link from 'next/link';
import Button from '@/components/form/Button';
import FeedbackPanel from '@/components/feedback/FeedbackPanel';
import CommentPanel from '@/components/feedback/CommentPanel';

import { Comment, CommentParams } from '@/state/types';

interface PageProps {
  params: CommentParams;
}

interface CommentsProps {
  comments?: Comment[];
  customStyles: string;
}

const Comments = ({ comments, customStyles }: CommentsProps) => {
  return comments?.map((comment, idx) => {
    return (
      <div key={idx}>
        <CommentPanel comment={comment} key={idx} customStyles="" />
        <hr className="my-10" />
      </div>
    )
  });
};

export default function Page({ params }: PageProps) {
  const feedbackId = parseInt(params.id);
  const { feedbacks } = useAppSelector(select);
  const feedback = feedbacks.find((item) => item.id === feedbackId);
  const comments = feedback?.comments;
  //const commentUserImage = feedback && feedback.comments?.[0]?.user?.image;

  return (
    <main className="font-jost pb-14 min-h-screen lg:w-11/12 lg:relative lg:max-w-7xl lg:-translate-x-1/2 lg:left-1/2">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link href="/">Go Back</Link>
          <Button
            text="Edit Feedback"
            customStyles="text-white text-sm bg-primary-second py-2 px-4 rounded-lg font-bold"
          />
        </div>
        <div className="rounded-lg">
          {feedback && <FeedbackPanel feedback={feedback} customStyles="" />}
          <div className="bg-white mt-10 rounded-lg">
            {feedback && <Comments comments={comments} customStyles="mt-16" />}
          </div>
        </div>
      </div>
    </main>
  );
}
