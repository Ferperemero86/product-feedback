import { ChangeEvent } from 'react';

interface Props {
  customStyles?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

export default function InputField({ customStyles, type, onChange }: Props) {
  return (
    <input type={type} className={`${customStyles} h-12`} onChange={onChange} />
  );
}
