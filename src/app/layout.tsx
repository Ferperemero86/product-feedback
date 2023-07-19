'use client';

import { ReactNode } from 'react';

import { Provider } from 'react-redux';
import { store } from '@/state/store';

import '@/styles/global.scss';

type ChildrenProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
