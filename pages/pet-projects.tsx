import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';

import { Empty } from '../components/Bases/Empty/Empty';
import { withLayout } from '../layouts/Layout';
import { IAppProps } from '../utils/types';
import { NavigationNode } from './api/navigations';

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

export default withLayout(PetProjects, true);
export const getStaticProps: GetStaticProps<IAppProps> = async () => {
  const res = await axios.get<NavigationNode[]>(`${process.env.NEXT_PUBLICK_DOMAIN}/navigations`);
  return {
    props: {
      menu: res.data,
    },
  };
};
