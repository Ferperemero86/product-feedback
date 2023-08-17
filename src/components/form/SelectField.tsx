import { ChangeEvent } from 'react';

interface Props {
  customStyles: string;
  options?: string[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectField({
  customStyles,
  options,
  onChange,
}: Props) {
  return (
    <select className={`${customStyles} h-12`} onChange={onChange}>
      {options?.map((option, idx) => (
        <option className="text-black" key={idx}>
          {option}
        </option>
      ))}
    </select>
  );
}
