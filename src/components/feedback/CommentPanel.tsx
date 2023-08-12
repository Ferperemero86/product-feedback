import Image from 'next/image';

import { Comment } from '@/state/types';

import Button from '@/components/form/Button';

interface CommentProps {
  customStyles?: string;
  comment: Comment;
}

export default function CommentPanel({ customStyles, comment }: CommentProps) {
  const { content, user } = comment;

  console.log('comment', comment);

  return (
    <div className={`${customStyles}  bg-white p-5 rounded-md`}>
      <div className="flex items-center">
        <Image
          src={user.image}
          width={40}
          height={40}
          alt="User image"
          style={{ borderRadius: '50%' }}
        />
        <div className="ml-2">
          <p className="text-secondary-third font-bold text-sm">{user.name}</p>
          <p className="text-secondary-fourth text-sm">{`@${user.username}`}</p>
        </div>
        <Button
          text="Reply"
          customStyles="text-primary-second ml-auto font-semibold"
        />
      </div>
    </div>
  );
}
