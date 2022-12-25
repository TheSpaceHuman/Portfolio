import Head from 'next/head';
import React, { FunctionComponent } from 'react';

import { Empty } from '../components/Empty/Empty';
import { withLayout } from '../layouts/Layout';

const PetProjects: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Pet Projects</title>
      </Head>
      <Empty subtitle={'Development continues'} />
    </>
  );
};

export default withLayout(PetProjects);
