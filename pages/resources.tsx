import Head from 'next/head';
import React, { FunctionComponent } from 'react';

import { Empty } from '../components/Bases/Empty/Empty';
import { withLayout } from '../layouts/Layout';

const Resources: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Resources</title>
      </Head>
      <Empty subtitle={'Development continues'} />
    </>
  );
};

export default withLayout(Resources, true);
