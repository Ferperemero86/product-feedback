interface Props {
  customStyles: string;
  text: string;
}

export default function Button({ customStyles, text }: Props) {
  return <button className={`${customStyles}`}>{text}</button>;
}
