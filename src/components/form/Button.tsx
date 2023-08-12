interface ButtonProps {
  onClick?: () => void;
  customStyles?: string;
  text: string;
}

export default function Button({ customStyles, text, onClick }: ButtonProps) {
  return (
    <button className={`${customStyles}`} onClick={onClick}>
      {text}
    </button>
  );
}
