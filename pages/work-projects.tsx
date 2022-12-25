import Head from 'next/head';
import React, { FunctionComponent } from 'react';

import { Empty } from '../components/Empty/Empty';
import { withLayout } from '../layouts/Layout';

const WorkProjects: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Work Projects</title>
      </Head>
      <Empty subtitle={'Development continues'} />
    </>
  );
};

export default withLayout(WorkProjects);
