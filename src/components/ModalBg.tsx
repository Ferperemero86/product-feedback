interface ModalProps {
  customStyles?: string;
}

export default function ModalBg({ customStyles }: ModalProps) {
  return (
    <div
      className={`bg-black opacity-70 absolute z-40 h-full w-full lg:w-[3000px] lg:-left-1/2 ${customStyles}`}
    ></div>
  );
}
