import { useState, useEffect } from 'react';

import { useAppSelector } from '@/state/hooks';
import {
  select,
  updateFeedbacks,
  updateFilteredFeedbacks,
} from '@/state/reducers/feedbacksSlice';

import Burger from '@/components/Burger';
import CloseIcon from '@/components/CloseIcon';
import SelectField from '@/components/form/SelectField';
import Button from '@/components/form/Button';
import Features from '@/components/filters/FeaturesFilter';
import StatusFilter from '@/components/filters/StatusFilter';

import { NavDisplayState } from '@/state/types';
import { useDispatch } from 'react-redux';

import { data } from '../../../data';

interface FiltersProps {
  customStyles: string;
}

const options = [
  { label: 'Most Upvotes', value: 'Most Upvotes' },
  { label: 'Least Upvotes', value: 'Least Upvotes' },
  { label: 'Most Comments', value: 'Most Comments' },
  { label: 'Least Comments', value: 'Least Comments' },
];

const Filters = ({ customStyles }: FiltersProps) => {
  return (
    <div
      className={`${customStyles} py-8 bg-secondary-second w-11/12 absolute top-[138px] right-0 md:static md:flex md:py-0 lg:flex-col lg:w-full lg:py-5`}
    >
      <Features customStyles="bg-white w-11/12 mx-auto rounded-lg p-5 lg:w-full" />
      <StatusFilter customStyles="bg-white w-11/12 mx-auto rounded-lg p-5 mt-10 md:mt-0 md:ml-3 lg:mx-auto lg:mt-5 lg:w-full" />
    </div>
  );
};

interface HeaderProps {
  showForm: () => void;
}

export default function Header({ showForm }: HeaderProps) {
  const [isNavDisplay, setNavDisplay] = useState<NavDisplayState>(false);
  const { feedbacks } = useAppSelector(select);

  const dispatch = useDispatch();

  const navDisplayStyles = isNavDisplay ? 'show-filters' : 'hidden-filters';

  const toggleNavDisplay = () => {
    setNavDisplay((prevState) => !prevState);
  };

  const sortFeedbacks = (label: string) => {
    const selectedLabel = label.toLowerCase();
    const filterData =
      feedbacks.length === 0 ? data.productRequests : feedbacks;

    if (selectedLabel === 'least upvotes') {
      const sortedFeedbacks = filterData
        .slice()
        .sort((a, b) => (a.upvotes ?? 0) - (b.upvotes ?? 0));

      dispatch(updateFeedbacks(sortedFeedbacks));
      dispatch(updateFilteredFeedbacks(sortedFeedbacks));
    } else if (selectedLabel === 'most upvotes') {
      const sortedFeedbacks = filterData
        .slice()
        .sort((a, b) => (b.upvotes ?? 0) - (a.upvotes ?? 0));

      dispatch(updateFeedbacks(sortedFeedbacks));
      dispatch(updateFilteredFeedbacks(sortedFeedbacks));
    } else if (selectedLabel === 'least comments') {
      const sortedFeedbacks = filterData
        .slice()
        .sort((a, b) => (a.comments?.length ?? 0) - (b.comments?.length ?? 0));

      dispatch(updateFeedbacks(sortedFeedbacks));
      dispatch(updateFilteredFeedbacks(sortedFeedbacks));
    } else if (selectedLabel === 'most comments') {
      const sortedFeedbacks = filterData
        .slice()
        .sort((a, b) => (b.comments?.length ?? 0) - (a.comments?.length ?? 0));

      dispatch(updateFeedbacks(sortedFeedbacks));
      dispatch(updateFilteredFeedbacks(sortedFeedbacks));
    }
  };

  useEffect(() => {
    if (feedbacks.length === 0) {
      sortFeedbacks(options[0].label);
    }
  }, []);

  return (
    <header className="header md:rounded-lg lg:relative">
      <div className="flex justify-between items-center py-3 px-6 md:p-0 lg:absolute lg:flex-col lg:w-1/3">
        <div className="header-heading md:w-2/6 md:flex md:justify-center lg:w-full lg:py-8 lg:rounded-lg">
          <div>
            <h1 className="text-white">Frontend Mentor</h1>
            <h2 className="text-white">Feedback Board</h2>
          </div>
        </div>
        {isNavDisplay && <CloseIcon onClick={toggleNavDisplay} />}
        {!isNavDisplay && <Burger onClick={toggleNavDisplay} />}
        <Filters
          customStyles={`${navDisplayStyles}  min-h-full md:min-height: 0`}
        />
      </div>
      <div className="bg-fourth-first flex justify-between items-center py-3 px-6 lg:absolute lg:w-3/5 lg:right-0 lg:rounded-lg">
        <div className="flex items-center">
          <label className="text-white text-xs">Sort by:</label>
          <SelectField
            customStyles="ml-2 bg-transparent text-fourth-second font-bold text-xs"
            options={options}
            sortFeedbacks={sortFeedbacks}
          />
        </div>
        <div className="flex items-center">
          <Button
            onClick={showForm}
            customStyles="bg-primary-first rounded-lg px-4 py-2 text-white font-bold text-xs"
            text="+ Add Feedback"
          />
        </div>
      </div>
    </header>
  );
}
