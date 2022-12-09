import axios from 'axios';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Empty } from '../components/Bases/Empty/Empty';
import { withLayout } from '../layouts/Layout';
import { IAppProps } from '../utils/types';
import { NavigationNode } from './api/navigations';

export const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Blog</title>
      </Head>
      <Empty subtitle={'Development continues'} />
    </>
  );
};

export default withLayout(Blog, true);
export const getStaticProps: GetStaticProps<IAppProps> = async () => {
  const res = await axios.get<NavigationNode[]>(`${process.env.NEXT_PUBLICK_DOMAIN}/navigations`);
  return {
    props: {
      menu: res.data,
    },
  };
};
