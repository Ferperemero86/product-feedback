import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/state/hooks';
import {
  select,
  updateFilteredFeedbacks,
} from '@/state/reducers/feedbacksSlice';

interface Props {
  customStyles: string;
}

export default function Features({ customStyles }: Props) {
  const [selectedFeature, setSelectedFeature] = useState<string>('all');
  const { feedbacks } = useAppSelector(select);
  const dispatch = useAppDispatch();

  const features = [
    { type: 'all', text: 'All' },
    { type: 'ui', text: 'UI' },
    { type: 'ux', text: 'UX' },
    { type: 'enhancement', text: 'Enhancement' },
    { type: 'bug', text: 'Bug' },
    { type: 'feature', text: 'Feature' },
  ];

  const getFilteredFeedbacks = () => {
    const feedbacksCopy = [...feedbacks];

    if (selectedFeature === 'all') {
      return feedbacks;
    }

    const feedbacksResult = feedbacksCopy.filter(
      (feedback) => feedback.category === selectedFeature,
    );

    if (feedbacksResult.length === 0) {
      return 'No Results';
    }

    return feedbacksResult;
  };

  const displayFeatures = () => {
    return features.map((feature, idx) => {
      const { type, text } = feature;
      const isSelected = selectedFeature === type;

      return (
        <span
          className={`inline-block ${
            isSelected ? 'bg-primary-second text-white' : 'bg-secondary-first'
          } py-2 px-4 rounded-lg mx-2 mt-3 text-primary-second font-bold cursor-pointer`}
          key={idx}
          onClick={() => setSelectedFeature(type)}
        >
          {text}
        </span>
      );
    });
  };

  useEffect(() => {
    const filteredFeedbacks = getFilteredFeedbacks();

    dispatch(updateFilteredFeedbacks(filteredFeedbacks));
  }, [selectedFeature]);

  return <div className={`${customStyles}`}>{displayFeatures()}</div>;
}
