interface TextAreaProps {
  customStyles?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({ customStyles, onChange }: TextAreaProps) {
  return (
    <textarea className={`${customStyles}`} onChange={onChange}></textarea>
  );
}
