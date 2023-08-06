import Image from 'next/image';

import { Feedback } from '@/state/types';

interface Props {
  customStyles?: string;
  feedback: Feedback;
}

export default function FeedbackPanel({ customStyles, feedback }: Props) {
  const { title, description, category, upvotes, comments } = feedback;

  return (
    <div className={`${customStyles}  bg-white p-5 rounded-md`}>
      <h2 className="text-lg font-bold text-secondary-third">{title}</h2>
      <p className="text-secondary-fourth mt-2">{description}</p>
      <span className="inline-block bg-secondary-first py-2 px-4 rounded-lg mx-2 mt-5 text-primary-second font-bold">
        {category}
      </span>
      <div className="flex justify-between mt-8">
        <div className="flex items-center">
          <span className="up-arrow"></span>
          <span className="font-bold text-secondary-third ml-3">{upvotes}</span>
        </div>
        <div className="flex">
          <Image src="/images/message-icon.svg" width={18} height={16} alt="" />
          <span className="text-secondary-third font-bold ml-2">
            {comments && comments.length}
          </span>
        </div>
      </div>
    </div>
  );
}
