interface Props {
  customStyles: string;
}

export default function Features({ customStyles }: Props) {
  const features = [
    { type: 'all', text: 'All' },
    { type: 'ui', text: 'UI' },
    { type: 'ux', text: 'UX' },
    { type: 'enhancement', text: 'Enhancement' },
    { type: 'Bug', text: 'Bug' },
    { type: 'Feature', text: 'Feature' },
  ];

  const displayFeatures = () => {
    return features.map((feature, idx) => {
      const text = feature.text;

      return (
        <span
          className="inline-block bg-secondary-first py-2 px-4 rounded-lg mx-2 mt-3 text-primary-second font-bold"
          key={idx}
        >
          {text}
        </span>
      );
    });
  };

  return <div className={`${customStyles}`}>{displayFeatures()}</div>;
}
