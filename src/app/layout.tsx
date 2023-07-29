'use client';

import { Jost } from 'next/font/google';

import { ReactNode } from 'react';

import { Provider } from 'react-redux';
import { store } from '@/state/store';

import UserProvider from '@/contexts/UserContext';

import '@/styles/global.scss';

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
});

type ChildrenProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <UserProvider>
        <Provider store={store}>
          <body className={`${jost.variable}`}>{children}</body>
        </Provider>
      </UserProvider>
    </html>
  );
}
