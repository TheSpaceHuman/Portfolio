import { ConfigProvider, theme } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';

import { Footer } from '../components/Modules/Footer/Footer';
import { Header } from '../components/Modules/Header/Header';
import { AppContextProvider, IAppContext } from '../contexts/app.context';
import { nodes } from '../helpers/navigations';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';

export const Layout: FunctionComponent<LayoutProps> = ({ children, fullScreen }) => {
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
        {!fullScreen && <Header />}
        <main className={styles.layout__main}>{children}</main>
        {!fullScreen && <Footer />}
      </ConfigProvider>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>,
  fullScreen: boolean = false,
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={nodes}>
        <Layout fullScreen={fullScreen}>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
