import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { withLayout } from '../layouts/Layout';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Home</title>
      </Head>
      <section>
        <h1>Home</h1>
      </section>
    </>
  );
};

export default withLayout(Index);
