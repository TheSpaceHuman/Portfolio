import Head from 'next/head';
import React from 'react';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const Layout: React.FunctionComponent<LayoutProps> = ({ children, title = 'Portfolio' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
