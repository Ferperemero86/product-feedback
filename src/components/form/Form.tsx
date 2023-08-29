import { ChangeEvent, MouseEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Feedback } from '@/state/types';

import {
  editFeedback,
  createFeedback,
  deleteFeedback,
  select,
  updateFeedbacks,
} from '@/state/reducers/feedbacksSlice';

import { useAppSelector, useAppDispatch } from '@/state/hooks';

import InputField from './InputField';
import SelectField from './SelectField';
import TextArea from './TextArea';
import Button from './Button';

interface FormProps {
  customStyles?: string;
  type: string;
  feedback?: Feedback;
  cancelForm: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface NewFeedbackbuttons {
  newFeedbackHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  cancelForm: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface EditFeedbackbuttons {
  deleteFeedbackHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  editFeedbackHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  cancelForm: (e: MouseEvent<HTMLButtonElement>) => void;
}

const NewFeedbackbuttons = ({
  newFeedbackHandler,
  cancelForm,
}: NewFeedbackbuttons) => {
  return (
    <div className="flex justify-end items-center mt-4">
      <Button
        text="Cancel"
        customStyles="bg-secondary-third text-white mr-4"
        onClick={cancelForm}
      />
      <Button
        text="Add Feedback"
        customStyles="bg-primary-first text-white"
        onClick={newFeedbackHandler}
      />
    </div>
  );
};

const EditFeedbackbuttons = ({
  deleteFeedbackHandler,
  editFeedbackHandler,
  cancelForm,
}: EditFeedbackbuttons) => {
  return (
    <div className="flex justify-end items-center mt-4">
      <Button
        text="Delete"
        customStyles="bg-secondary-third text-white mr-4"
        onClick={deleteFeedbackHandler}
      />
      <Button
        text="Cancel"
        customStyles="bg-secondary-third text-white mr-4"
        onClick={cancelForm}
      />
      <Button
        text="Save Changes"
        customStyles="bg-primary-first text-white"
        onClick={editFeedbackHandler}
      />
    </div>
  );
};

export default function Form({
  customStyles,
  type,
  feedback,
  cancelForm,
}: FormProps) {
  const categoriesList = [
    { label: 'UI', value: 'ui' },
    { label: 'UX', value: 'ux' },
    { label: 'Enhancement', value: 'enhancement' },
    { label: 'Bug', value: 'bug' },
    { label: 'Feature', value: 'feature' },
  ];
  const statusList = [
    { label: 'Planned', value: 'planned' },
    { label: 'In-progress', value: 'in-progress' },
    { label: 'Live', value: 'live' },
  ];
  const formTitle = feedback?.title ? feedback.title : 'Create New Feedback';
  const formDescription = feedback?.description ? feedback.description : '';
  const { push } = useRouter();

  const dispatch = useAppDispatch();
  const { feedbacks } = useAppSelector(select);
  const [title, setTitle] = useState<string>(formTitle);
  const [category, setCategory] = useState<string>(categoriesList[0].label);
  const [status, setStatus] = useState<string>(categoriesList[0].label);
  const [description, setDescription] = useState<string>(formDescription);

  const addTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(() => e.target.value);
  };

  const addCategory = (label: string) => {
    setCategory(() => label.toLowerCase());
  };

  const addStatus = (label: string) => {
    setStatus(() => label.toLowerCase());
  };

  const addDetails = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(() => e.target.value);
  };

  const deleteFeedbackHandler = () => {
    if (feedback) {
      dispatch(deleteFeedback(feedback.id));
      push('/');
    }
  };

  const editFeedbackHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (feedback) {
      const editedFeedback = {
        title,
        category,
        status,
        description,
      };

      const mergedFeedback = { ...feedback, ...editedFeedback };

      dispatch(editFeedback(mergedFeedback));
      push('/');
    }
  };

  const createFeedbackHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newFeedback = {
      id: feedbacks.length + 1,
      title,
      category,
      status,
      description,
    };

    dispatch(createFeedback(newFeedback));
    cancelForm(e);
  };

  return (
    <form className={`${customStyles} max-w-xl p-10 rounded-lg`}>
      <h1 className="mb-10 text-2xl">{formTitle}</h1>
      <div>
        <p className="font-semibold text-sm text-secondary-third">
          Feedback Title
        </p>
        <p className="mt-2">Add a short, descriptive headline</p>
        <InputField
          type="text"
          onChange={addTitle}
          customStyles="w-full bg-secondary-second mt-4"
        />
      </div>
      <div className="mt-5">
        <p className="font-semibold text-sm text-secondary-third">Category</p>
        <p className="mt-2">Choose a category for your feedback</p>
        <SelectField
          getFieldData={addCategory}
          options={categoriesList}
          customStyles="w-full bg-secondary-second mt-4 h-12"
        />
      </div>
      {type === 'edit' && (
        <div className="mt-5">
          <p className="font-semibold text-sm text-secondary-third">
            Update Status
          </p>
          <p className="mt-2">Change feature state</p>
          <SelectField
            getFieldData={addStatus}
            options={statusList}
            customStyles="w-full bg-secondary-second mt-4 h-12"
          />
        </div>
      )}
      <div className="mt-5">
        <p className="font-semibold text-sm text-secondary-third">
          Feedback Detail
        </p>
        <p className="mt-2">
          Include any specific comments on what should be improved, added, etc.
        </p>
        <TextArea
          onChange={addDetails}
          customStyles="w-full h-[150px] bg-secondary-second mt-5"
        />
      </div>
      {type !== 'edit' && (
        <NewFeedbackbuttons
          newFeedbackHandler={createFeedbackHandler}
          cancelForm={cancelForm}
        />
      )}
      {type === 'edit' && (
        <EditFeedbackbuttons
          deleteFeedbackHandler={deleteFeedbackHandler}
          editFeedbackHandler={editFeedbackHandler}
          cancelForm={cancelForm}
        />
      )}
    </form>
  );
}
