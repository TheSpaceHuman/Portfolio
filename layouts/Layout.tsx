import Head from 'next/head';
import React, { FunctionComponent, useContext } from 'react';
import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import { Spinner } from '~/components/Sppiner/Spinner';
import { AppContext, AppContextProvider, IAppContext } from '~/contexts/app.context';
import { nodes } from '~/helpers/navigations';

import styles from './Layout.module.scss';
import { ILayoutProps } from './Layout.props';

export const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  const { loading } = useContext(AppContext);

  return (
    <div className={styles.layout}>
      <Head>
        <title>Portfolio</title>
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
        />
      </Head>
      <Header />
      <main className={styles.layout__main}>{children}</main>
      <Footer />
      {loading && <Spinner />}
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider
        menu={nodes}
        loading={false}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
