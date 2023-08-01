'use client';

import { Jost } from 'next/font/google';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/state/store';

import UserProvider from '@/contexts/UserContext';

import Header from '@/components/layout/Header';
import Features from '@/components/filters/Features';

import '@/styles/global.scss';

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
});

interface ChildrenProps {
  children: ReactNode;
}

const MobileFilters = () => {
  return (
    <div className="py-8 bg-secondary-second w-full">
      <Features />
    </div>
  );
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <UserProvider>
        <Provider store={store}>
          <body className={`${jost.variable}`}>
            <Header />
            <MobileFilters />
            {children}
          </body>
        </Provider>
      </UserProvider>
    </html>
  );
}
