import { useState, ChangeEvent, FormEvent } from 'react';

import TextArea from '@/components/form/TextArea';
import Button from '@/components/form/Button';

interface AddCommentProps {
  buttonText: string;
  customStyles?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>, content: string) => void;
}

export default function AddComment({
  customStyles,
  buttonText,
  onSubmit,
}: AddCommentProps) {
  const [content, setContent] = useState<string>('');

  const addDetails = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(() => e.target.value);
  };

  return (
    <form
      className={`${customStyles} rounded-lg`}
      onSubmit={(e) => onSubmit(e, content)}
    >
      <p className="text-secondary-third font-bold mb-6">Add Comment</p>
      <TextArea
        onChange={addDetails}
        customStyles="w-full h-[150px] bg-secondary-second"
      />
      <div className="flex justify-end">
        <Button
          text={buttonText}
          customStyles="bg-fourth-third text-white mt-2"
        />
      </div>
    </form>
  );
}
