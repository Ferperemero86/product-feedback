import { FilterFeedback } from '@/state/types';
import { useEffect, useState } from 'react';

interface SelectFieldProps {
  customStyles?: string;
  options: FilterFeedback[];
  sortFeedbacks?: (label: string) => void;
  getFieldData?: (label: string) => void;
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
        <span className="font-normal text-red">{option.label}</span>
      </li>
    );
  });
};

export default function SelectField({
  customStyles,
  options,
  sortFeedbacks,
  getFieldData,
}: SelectFieldProps) {
  const [selected, setSelected] = useState<string>(options[0].label);
  const [isOptionsActive, setOptionsActive] = useState<boolean>(false);

  const showOptions = () => {
    setOptionsActive((prevState) => !prevState);
  };

  const selectOption = (label: string) => {
    setSelected(label);
    setOptionsActive(false);
    if (getFieldData) {
      getFieldData(label);
    }
    if (sortFeedbacks) {
      sortFeedbacks(label);
    }
  };

  useEffect(() => {
    selectOption(selected);
  }, []);

  return (
    <div className={`relative hover:cursor-pointer ${customStyles}`}>
      <div className={`h-full w-full flex items-center`} onClick={showOptions}>
        <p className=" pl-2 pr-8 w-full text-inherit">{selected}</p>
        <div className="arrow"></div>
      </div>
      <ul
        className={`${
          isOptionsActive ? `block` : `hidden`
        } absolute border bg-white min-w-[200px] w-full list-none`}
      >
        <Options options={options} selectOption={selectOption} />
      </ul>
    </div>
  );
}
