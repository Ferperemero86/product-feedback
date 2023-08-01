import { useState } from 'react';

import Burger from '@/components/Burger';
import CloseIcon from '@/components/CloseIcon';
import SelectField from '@/components/form/SelectField';
import Button from '@/components/form/Button';

type NavDisplayState = boolean;

export default function Header() {
  const [isNavDisplay, setNavDisplay] = useState<NavDisplayState>(false);

  const toggleNavDisplay = () => {
    setNavDisplay((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="flex justify-between items-center py-3 px-6">
        <div>
          <div>
            <h1 className="text-white">Frontend Mentor</h1>
            <h2 className="text-white">Feedback Board</h2>
          </div>
        </div>
        {isNavDisplay && <CloseIcon onClick={toggleNavDisplay} />}
        {!isNavDisplay && <Burger onClick={toggleNavDisplay} />}
      </div>
      <div className="bg-fourth-first flex justify-between items-center py-3 px-6">
        <div className="flex align-baseline">
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
