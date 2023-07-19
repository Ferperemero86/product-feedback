'use client';

import { ReactNode } from 'react';

import { Provider } from 'react-redux';
import { store } from '@/state/store';

import UserProvider from '@/contexts/UserContext';

import '@/styles/global.scss';

type ChildrenProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <UserProvider>
        <Provider store={store}>
          <body>{children}</body>
        </Provider>
      </UserProvider>
    </html>
  );
}
