interface Props {
  customStyles: string;
}

export default function SelectField({ customStyles }: Props) {
  return (
    <select className={`${customStyles}`}>
      <option className="text-black">Most Upvotes</option>
      <option className="text-black">least Upvotes</option>
    </select>
  );
}
