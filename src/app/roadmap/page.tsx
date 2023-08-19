'use client';

import { useState, MouseEvent } from 'react';

import { useAppSelector } from '@/state/hooks';
import { select } from '@/state/reducers/feedbacksSlice';

import FeedbackPanel from '@/components/feedback/FeedbackPanel';
import Form from '@/components/form/Form';
import ModalBg from '@/components/ModalBg';
import Button from '@/components/form/Button';

import Link from 'next/link';
import { Feedback } from '@/state/types';

interface RoadMapHeader {
  showForm: (e: MouseEvent<HTMLButtonElement>) => void;
}

const RoadMapHeader = ({ showForm }: RoadMapHeader) => {
  return (
    <header className="p-6 bg-fourth-first flex justify-between items-center">
      <div className="">
        <Link href="/" className="text-white font-bold text-sm underline">
          Go Back
        </Link>
        <h1 className="text-white text-lg">Roadmap</h1>
      </div>
      <Button
        onClick={showForm}
        text="+ Add Feedback"
        customStyles="bg-primary-first text-white px-5 py-3"
      />
    </header>
  );
};

interface RoadMapNavProps {
  handleActiveLink: (link: string) => void;
  activeLink: string;
}

const RoadMapNav = ({ handleActiveLink, activeLink }: RoadMapNavProps) => {
  const activeClass = 'border-b-4 border-primary-first';

  return (
    <nav className="md:hidden">
      <ul className="flex justify-between list-none w-full p-4">
        <li
          className={`${activeLink === 'Planned' ? activeClass : ''}`}
          onClick={() => handleActiveLink('Planned')}
        >
          Planned
        </li>
        <li
          className={`${activeLink === 'In-Progress' ? activeClass : ''}`}
          onClick={() => handleActiveLink('In-Progress')}
        >
          In-Progress
        </li>
        <li
          className={`${activeLink === 'Live' ? activeClass : ''}`}
          onClick={() => handleActiveLink('Live')}
        >
          Live
        </li>
      </ul>
    </nav>
  );
};

interface RoadMapHeadings {
  activeLink: string;
  plannedFeedbacks: Feedback[];
  inProgressFeedbacks: Feedback[];
  liveFeedbacks: Feedback[];
}

const RoadMapHeadings = ({
  activeLink,
  plannedFeedbacks,
  inProgressFeedbacks,
  liveFeedbacks,
}: RoadMapHeadings) => {
  return (
    <div className="flex w-full p-4 pb-0 md:justify-between">
      <div
        className={`${
          activeLink === 'Planned' ? 'block' : 'hidden'
        } md:block md:flex-1`}
      >
        <h2 className="text-lg font-bold text-secondary-third">
          Planned ({plannedFeedbacks.length})
        </h2>
        <p>Ideas prioritized for research</p>
      </div>
      <div
        className={`${
          activeLink === 'In-Progress' ? 'block' : 'hidden'
        } md:block md:flex-1`}
      >
        <h2 className="text-lg font-bold text-secondary-third">
          In-progress ({inProgressFeedbacks.length})
        </h2>
        <p>Currently being developed</p>
      </div>
      <div
        className={`${
          activeLink === 'Live' ? 'block' : 'hidden'
        } md:block md:flex-1`}
      >
        <h2 className="text-lg font-bold text-secondary-third">
          Live ({liveFeedbacks.length})
        </h2>
        <p>Released features</p>
      </div>
    </div>
  );
};

interface RoadMapFeedbacks {
  activeLink: string;
  plannedFeedbacks: Feedback[];
  inProgressFeedbacks: Feedback[];
  liveFeedbacks: Feedback[];
}

const RoadMapFeedbacks = ({
  activeLink,
  plannedFeedbacks,
  liveFeedbacks,
  inProgressFeedbacks,
}: RoadMapFeedbacks) => {
  return (
    <div className="flex w-full p-4 pt-0 md:justify-between">
      <div
        className={`flex-1 ${
          activeLink === 'Planned' ? 'block' : 'hidden'
        } md:block`}
      >
        {plannedFeedbacks.map((feedback, idx) => {
          return (
            <FeedbackPanel
              feedback={feedback}
              key={idx}
              customStyles="w-11/12 border-t-4 border-tertiary-first mt-10"
            />
          );
        })}
      </div>
      <div
        className={`flex-1 ${
          activeLink === 'In-Progress' ? 'block' : 'hidden'
        } md:block`}
      >
        {inProgressFeedbacks.map((feedback, idx) => {
          return (
            <FeedbackPanel
              feedback={feedback}
              key={idx}
              customStyles="w-11/12 border-t-4 border-primary-first mt-10"
            />
          );
        })}
      </div>
      <div
        className={`flex-1 ${
          activeLink === 'Live' ? 'block' : 'hidden'
        } md:block`}
      >
        {liveFeedbacks.map((feedback, idx) => {
          return (
            <FeedbackPanel
              feedback={feedback}
              key={idx}
              customStyles="w-11/12 border-t-4 border-tertiary-second mt-10"
            />
          );
        })}
      </div>
    </div>
  );
};

export default function RoadMap() {
  const [activeLink, setActiveLink] = useState('Planned');
  const [isFormShowing, setFormShowing] = useState<boolean>(false);
  const { feedbacks } = useAppSelector(select);
  console.log('feedbacks', feedbacks);
  const plannedFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === 'planned',
  );
  const inProgressFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === 'in-progress',
  );
  const liveFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === 'live',
  );

  const showForm = () => {
    setFormShowing(() => true);
  };

  const cancelForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setFormShowing(() => false);
  };

  const handleActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <main className="relative font-jost pb-14 min-h-screen lg:w-11/12 lg:max-w-7xl lg:-translate-x-1/2 lg:left-1/2">
      {isFormShowing && <ModalBg />}
      <RoadMapHeader showForm={showForm} />
      {isFormShowing && (
        <Form
          cancelForm={cancelForm}
          customStyles="bg-white w-11/12 absolute -translate-x-1/2  left-1/2 lg:top-14 z-50"
          type="create"
        />
      )}
      <RoadMapNav handleActiveLink={handleActiveLink} activeLink={activeLink} />
      <RoadMapHeadings
        activeLink={activeLink}
        plannedFeedbacks={plannedFeedbacks}
        inProgressFeedbacks={inProgressFeedbacks}
        liveFeedbacks={liveFeedbacks}
      />
      <RoadMapFeedbacks
        activeLink={activeLink}
        plannedFeedbacks={plannedFeedbacks}
        inProgressFeedbacks={inProgressFeedbacks}
        liveFeedbacks={liveFeedbacks}
      />
    </main>
  );
}
