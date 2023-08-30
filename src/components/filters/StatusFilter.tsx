import Link from 'next/link';

import { useAppSelector } from '@/state/hooks';
import { select } from '@/state/reducers/feedbacksSlice';

interface Props {
  customStyles: string;
}

export default function StatusFilter({ customStyles }: Props) {
  const { feedbacks } = useAppSelector(select);
  const plannedFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === 'planned',
  );
  const inProgressFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === 'in-progress',
  );
  const liveFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === 'live',
  );

  return (
    <div className={`${customStyles}`}>
      <div className="flex justify-between">
        <p className="font-bold text-secondary-third">Roadmap</p>
        <Link
          href="/roadmap"
          className="text-primary-second font-semibold underline"
        >
          View
        </Link>
      </div>
      <ul className="mt-7 ml-6 list-disc">
        <li className="mt-2 marker:text-tertiary-first">
          <div className="flex justify-between text-secondary-fourth">
            <p>Planned</p>
            <span className="font-bold">{plannedFeedbacks.length}</span>
          </div>
        </li>
        <li className="mt-2 marker:text-primary-first">
          <div className="flex justify-between text-secondary-fourth">
            <p>In-Progress</p>
            <span className="font-bold">{inProgressFeedbacks.length}</span>
          </div>
        </li>
        <li className="mt-2 marker:text-tertiary-second">
          <div className="flex justify-between text-secondary-fourth">
            <p>Live</p>
            <span className="font-bold">{liveFeedbacks.length}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
