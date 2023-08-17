import { MouseEvent } from 'react';

interface ButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  customStyles?: string;
  text: string;
}

export default function Button({ customStyles, text, onClick }: ButtonProps) {
  return (
    <button
      className={`${customStyles} rounded-md text-sm p-2`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
