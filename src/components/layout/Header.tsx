import { useState } from 'react';

import Burger from '@/components/Burger';
import CloseIcon from '@/components/CloseIcon';
import SelectField from '@/components/form/SelectField';
import Button from '@/components/form/Button';
import Features from '@/components/filters/FeaturesFilter';
import StatusFilter from '@/components/filters/StatusFilter';

type NavDisplayState = boolean;

const Filters = () => {
  return (
    <div className="py-8 bg-secondary-second w-11/12 h-full absolute top-[122px] right-0 md:static md:flex md:py-0 lg:flex-col lg:w-full lg:py-5">
      <Features customStyles="bg-white w-11/12 mx-auto rounded-lg p-5 lg:w-full" />
      <StatusFilter customStyles="bg-white w-11/12 mx-auto rounded-lg p-5 mt-10 md:mt-0 md:ml-3 lg:mx-auto lg:mt-5 lg:w-full" />
    </div>
  );
};

export default function Header() {
  const [isNavDisplay, setNavDisplay] = useState<NavDisplayState>(false);

  const toggleNavDisplay = () => {
    setNavDisplay((prevState) => !prevState);
  };

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
        <Filters />
      </div>
      <div className="bg-fourth-first flex justify-between items-center py-3 px-6 lg:absolute lg:w-3/5 lg:right-0 lg:rounded-lg">
        <div className="flex items-center">
          <label className="text-white text-xs">Sort by:</label>
          <SelectField customStyles="ml-2 bg-transparent text-white font-bold text-xs" />
        </div>
        <div className="flex items-center">
          <Button
            customStyles="bg-primary-first rounded-lg px-4 py-2 text-white font-bold text-xs"
            text="+ Add Feedback"
          />
        </div>
      </div>
    </header>
  );
}
