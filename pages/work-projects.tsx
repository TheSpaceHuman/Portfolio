import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';

import { withLayout } from '../layouts/Layout';
import { IAppProps } from '../utils/types';
import { NavigationNode } from './api/navigations';

const WorkProjects: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Work Projects</title>
      </Head>
      <section>
        <h1>Work Projects</h1>
      </section>
    </>
  );
};

export default withLayout(WorkProjects);
export const getStaticProps: GetStaticProps<IAppProps> = async () => {
  const res = await axios.get<NavigationNode[]>(`${process.env.NEXT_PUBLICK_DOMAIN}/navigations`);
  return {
    props: {
      menu: res.data,
    },
  };
};