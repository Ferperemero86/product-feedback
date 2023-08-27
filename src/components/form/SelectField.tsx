import { FilterFeedback } from '@/state/types';
import { useState, MouseEvent } from 'react';

interface SelectFieldProps {
  customStyles?: string;
  options: FilterFeedback[];
  sortFeedbacks: (label: string) => void;
}

interface OptionsProps {
  options: FilterFeedback[];
  selectOption: (label: string) => void;
}

const Options = ({ options, selectOption }: OptionsProps) => {
  return options.map((option, idx) => {
    return (
      <li
        className="text-black py-2 pl-4 border-b-2 hover:text-primary-first"
        onClick={() => selectOption(option.label)}
        key={option.label}
      >
        <span className="font-normal text-secondary-fourth">
          {option.label}
        </span>
      </li>
    );
  });
};

export default function SelectField({
  customStyles,
  options,
  sortFeedbacks,
}: SelectFieldProps) {
  const [selected, setSelected] = useState<string>(options[0].label);
  const [isOptionsActive, setOptionsActive] = useState<boolean>(false);

  const showOptions = () => {
    setOptionsActive((prevState) => !prevState);
  };

  const selectOption = (label: string) => {
    setSelected(label);
    setOptionsActive(false);
    sortFeedbacks(label);
    console.log(label);
  };

  return (
    <div className={`${customStyles} relative hover:cursor-pointer`}>
      <div className={`h-4 w-full flex items-center`} onClick={showOptions}>
        <p className="text-fourth-second pl-2 pr-8">{selected}</p>
        <div className="arrow"></div>
      </div>
      <ul
        className={`${
          isOptionsActive ? `block` : `hidden`
        } absolute top-6 border bg-white w-[200px] list-none`}
      >
        <Options options={options} selectOption={selectOption} />
      </ul>
    </div>
  );
}
