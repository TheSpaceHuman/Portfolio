import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import { AppContextProvider, IAppContext } from '~/contexts/app.context';
import { nodes } from '~/helpers/navigations';

import styles from './Layout.module.scss';
import { ILayoutProps } from './Layout.props';

export const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <main className={styles.layout__main}>{children}</main>
      <Footer />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={nodes}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
