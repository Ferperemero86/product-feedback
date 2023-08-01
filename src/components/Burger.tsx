import { OnClickDivHandler } from '@/state/types';

interface Props {
  onClick: OnClickDivHandler;
}

export default function Burger({ onClick }: Props) {
  return (
    <div onClick={onClick}>
      <div className="w-[16px] h-[3px] bg-white"></div>
      <div className="mt-[3px] w-[16px] h-[3px] bg-white"></div>
      <div className="mt-[3px] w-[16px] h-[3px] bg-white"></div>
    </div>
  );
}
