import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Empty } from '../components/Empty/Empty';
import { withLayout } from '../layouts/Layout';

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

export default withLayout(Blog);
