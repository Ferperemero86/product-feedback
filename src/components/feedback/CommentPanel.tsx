import Image from 'next/image';

import { Comment, Reply } from '@/state/types';

import Button from '@/components/form/Button';

interface PanelProps {
  customStyles?: string;
  comment: Comment;
}

const Panel = ({ comment, customStyles }: PanelProps) => {
  const { content, user, replies } = comment;
  return (
    <div className={`${customStyles}  bg-white p-5 rounded-md`}>
      <div className="flex items-center">
        <Image
          src={user.image}
          width={40}
          height={40}
          alt="User image"
          style={{
            borderRadius: '50%',
            alignSelf: 'baseline',
            marginRight: '1rem',
          }}
        />
        <div className="ml-2">
          <p className="text-secondary-third font-bold text-sm">{user.name}</p>
          <p className="text-secondary-fourth text-sm">{`@${user.username}`}</p>
          <p className="mt-5">{content}</p>
        </div>
        <Button
          text="Reply"
          customStyles="text-primary-second ml-auto font-semibold self-start"
        />
      </div>
    </div>
  );
};

interface RepliesProps {
  replies: Reply[];
}

const Replies = ({ replies }: RepliesProps) => {
  return replies?.map((reply, idx) => {
    return <Panel comment={reply} key={idx} />;
  });
};

interface CommentProps {
  customStyles?: string;
  comment: Comment;
}

export default function CommentPanel({ customStyles, comment }: CommentProps) {
  const replies = comment?.replies;

  return (
    <>
      <Panel customStyles={customStyles} comment={comment} />
      <div className="pl-10">{replies && <Replies replies={replies} />}</div>
    </>
  );
}
