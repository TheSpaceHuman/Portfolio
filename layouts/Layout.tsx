import { ConfigProvider, theme } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';

import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { AppContextProvider, IAppContext } from '../contexts/app.context';
import { nodes } from '../helpers/navigations';
import styles from './Layout.module.css';
import { ILayoutProps } from './Layout.props';

export const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  const { darkAlgorithm } = theme;
  const customTheme: ThemeConfig = {
    token: {
      borderRadius: 0,
      colorPrimary: '#ffec3d',
    },
    algorithm: [darkAlgorithm],
  };

  return (
    <div className={styles.layout}>
      <ConfigProvider theme={customTheme}>
        <Head>
          <title>Portfolio</title>
        </Head>
        <Header />
        <main className={styles.layout__main}>{children}</main>
        <Footer />
      </ConfigProvider>
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
