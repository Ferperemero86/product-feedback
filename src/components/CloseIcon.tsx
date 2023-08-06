import { OnClickDivHandler } from '@/state/types';

interface Props {
  onClick: OnClickDivHandler;
}

export default function CloseIcon({ onClick }: Props) {
  return (
    <div
      className="relative flex items-center justify-center md:hidden"
      onClick={onClick}
    >
      <div className="w-[16px] h-[3px] bg-white tramsform -rotate-45 absolute"></div>
      <div className="w-[16px] h-[3px] bg-white transform rotate-45 absolute"></div>
    </div>
  );
}
