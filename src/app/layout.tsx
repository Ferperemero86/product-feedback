import { ReactNode } from 'react';

import '@/styles/global.scss';

type ChildrenProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
