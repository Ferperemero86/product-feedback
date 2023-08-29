import Image from 'next/image';

export default function NoFeedback() {
  return (
    <div className="text-center">
      <Image
        src="/assets/shared/no-feedback.svg"
        width={130}
        height={136}
        alt="No Feedbacks yet"
        style={{ margin: '50px auto' }}
      />
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl">There is no feedback yet</h1>
        <p>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
      </div>
    </div>
  );
}
