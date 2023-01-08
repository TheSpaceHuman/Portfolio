import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { withLayout } from '~/layouts/Layout';

const WorkProjects: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Work Projects</title>
      </Head>
    </>
  );
};
export const getStaticProps: GetStaticProps = () => {
  return {
    notFound: true,
  };
};
export default withLayout(WorkProjects);
